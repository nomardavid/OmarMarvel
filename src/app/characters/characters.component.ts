import { Component, OnInit } from '@angular/core';
import { MarvelService } from '../services/service-marvel.service';
import { CharactersService } from '../services/character.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.sass'],
  providers: [
    {provide: MarvelService, useClass: CharactersService }
  ]
})

export class CharactersComponent implements OnInit {

  title: string;
  getData: string;
  characters: any;
  query: string = '';
  page: number = 1;
  perPage: number = 10;

  constructor(
    private marvelService: MarvelService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  getCharacters() {
    this.activatedRoute.params
      .do( (params) => {
        this.page = params['p'] ? parseInt(params['p'], 10) : 1;
        this.query = params['q'] || '';
      })
      .switchMap( () => {
        return this.marvelService.getCharacters({
          page: this.page,
          perPage: this.perPage,
          query: this.query
        });
      })
      .subscribe ( (characters) => {
        this.characters = characters;
      });
  }

  ngOnInit() {
    this.getCharacters();
  }

  getTotalPages() {
    if (this.characters) {
      return Math.ceil(this.characters.data.total / this.perPage);
    }
  }

  onChangePage(newPage) {
    this.router.navigate([{
      p: newPage,
      q: this.query
    }]);
  }

  onSearch(query) {
    this.router.navigate([query ? {q: query} : {} ]);
  }


}

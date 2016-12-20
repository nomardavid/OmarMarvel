import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CharactersService } from '../services/character.service';

@Component({
  selector: 'app-character-id',
  templateUrl: './character-id.component.html',
  styleUrls: ['./character-id.component.sass']
})
export class CharacterIdComponent implements OnInit {
  comics: any;
  page: number = 1;
  perPage: number = 10;
  constructor (
    private route: ActivatedRoute,
    private charactersService: CharactersService,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params
      .map((params) => params['id'])
      .switchMap((characterId) => this.charactersService.get(characterId))
      .subscribe((comics) => {
        this.comics = comics;
      });
  }


}

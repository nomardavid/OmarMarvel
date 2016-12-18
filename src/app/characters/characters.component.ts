import { Component, OnInit } from '@angular/core';
import { MarvelService } from '../service-marvel.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.sass'],
  providers: [MarvelService]
})

export class CharactersComponent implements OnInit {

  title: string;
  getData: string;
  characters: Array<Object> = [];

  constructor(private marvelService: MarvelService) { }

  ngOnInit() {
    this.marvelService.getCharacters()
      .subscribe(
      (data: Array<Object>) => this.characters = data,
        onerror => console.log(onerror),
        () => console.log("finished character request")
      );
      console.log(this.characters);
  }
}

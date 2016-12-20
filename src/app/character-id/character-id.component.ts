import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharactersService } from '../services/character.service';

@Component({
  selector: 'app-character-id',
  templateUrl: './character-id.component.html',
  styleUrls: ['./character-id.component.sass']
})
export class CharacterIdComponent implements OnInit {
  character: any;
  constructor(private route: ActivatedRoute, private charactersService: CharactersService) { }

  ngOnInit() {
    this.route.params
      .map((params) => params['id'])
      .switchMap((characterId) => this.charactersService.get(characterId))
      .subscribe((character) => {
        this.character = character;
        console.log(character);
      });
  }
}

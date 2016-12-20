import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { MarvelService } from './service-marvel.service';

@Injectable()
export class CharactersService extends MarvelService {
  url = 'http://gateway.marvel.com/v1/public/characters';
  paramsName = 'nameStartsWith';

  constructor(http: Http) {
    super(http);
  }
}
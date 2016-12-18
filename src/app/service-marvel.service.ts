import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()
export class MarvelService {
  private url: string = "https://gateway.marvel.com/v1/public";
  private apiKey: string = "3fd03d210850e82f3c329d7c477b0d3a";
  private timeSmap: string = "1";
  private hashMD5: string = "145232db20b95681ca4a26f167b7fcda";
  private limitCharacters: number = 10;

  constructor( private http: Http ) { }


  getCharacters() {
    return this.http
      .get(`${this.url}/characters?limit=${this.limitCharacters}&apikey=${this.apiKey}&ts=${this.timeSmap}&hash=${this.hashMD5}`)
      .map( (res: Response) => res.json().data.results )
      .catch( (err: any) => Observable.throw(err.json() || 'Server error') )
    
  }

}

import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs';

export interface ListOptions {
  page: number;
  perPage: number;
  query: string;
}

export abstract class MarvelService {
  // private url: string = 'https://gateway.marvel.com/v1/public';
  private apiKey: string = '3fd03d210850e82f3c329d7c477b0d3a';
  private timeSmap: string = '1';
  private hashMD5: string = '145232db20b95681ca4a26f167b7fcda';
  private limitCharacters: number = 10;
  abstract paramsName;
  abstract url;

  // oldUrl: string = `${this.url}/characters?limit=${this.limitCharacters}&apikey=${this.apiKey}&ts=${this.timeSmap}&hash=${this.hashMD5}`;

  constructor( private http: Http ) { }


  getCharacters(options: ListOptions) {
      return this.http
      .get(this.url, {
        search: this.getListCharacters(options)
      })
      .map( res => res.json() )
      .catch( (err: any) => Observable.throw( 'Server error'));
  }

  private getListCharacters(options: ListOptions) {
    let params = this.getBasicParams();
    params.set('ts', this.timeSmap);
    params.set('limit', String(options.perPage));
    params.set('offset', String(options.perPage * (options.page - 1)));
    params.set('hash', this.hashMD5);
    if ( this.paramsName && options.query) {
      params.set(this.paramsName, options.query);
    }
    return params;
  }

  private getBasicParams() {
    let baseParams = new URLSearchParams();
    baseParams.set('apikey', this.apiKey);
    return baseParams;
  }

}

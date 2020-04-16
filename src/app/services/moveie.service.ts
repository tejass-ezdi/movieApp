import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export enum SearchType {
  all = '',
  movie = 'movie',
  series = 'series',
  episode = 'episode'   
}
@Injectable({
  providedIn: 'root'
})
export class MoveieService {
  url = 'http://www.omdbapi.com/';
  apiKey = '2be398c0'

  constructor( private httpClient: HttpClient) { }

  searchData(title: string, type: SearchType): Observable<any> {
    return this.httpClient.get(`${this.url}?s=${encodeURI(title)}&type=${type}&apiKey=${this.apiKey}`)
    .pipe(
      map( results => results['Search'])
    )
  }

  getDetails(id) {
    return this.httpClient.get(`${this.url}?i=${id}&plot=full&apiKey=${this.apiKey}`);
  }
}

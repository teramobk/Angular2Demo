import { Injectable } from '@angular/core';
// * gives us our http client
import { Headers, Http } from '@angular/http';

// * our Hero class
import { Hero } from './hero';

// * changes observables to promises
import 'rxjs/add/operator/toPromise';

@Injectable()
export class HeroService {
  constructor(private http: Http) { }

  heroesUrl : string = 'http://vard12/dataservices/WebApi/Angular2Demo/api/heroes';
getHeroes(): Promise<Hero[]> {
  var list = this.http.get(this.heroesUrl)
  .toPromise()
  .then(response => response.json() as Hero[])
  .catch(this.handleError);

  return list;
}

private handleError(error: any): Promise<any>{
  console.error('Error:', error);
  return Promise.reject(error.message || error);
}

}

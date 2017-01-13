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

  this.heroesUrl = 'http://vard12/dataservices/WebApi/Angular2Demo/api/heroes';

}

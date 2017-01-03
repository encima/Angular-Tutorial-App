import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Hero } from './hero';

import { HEROES } from './hero-data';

@Injectable()
export class HeroService {

  private heroesUrl = 'http://localhost:5000/heroes';

  constructor(private http: Http) { }

/**
 * conversion of retrieval to a promise
 */
  getHeroes(): Promise<Hero[]> {
    return this.http.get(this.heroesUrl)
               .toPromise()
               .then(response => {
               console.log(response); 
               return response.json() as Hero[]
              })
               .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  getHero(id: number): Promise<Hero> {
     const url = `${this.heroesUrl}/${id}`;
    return this.http.get(url)
    .toPromise()
    .then(response => response.json() as Hero)
    .catch(this.handleError);
  }

}

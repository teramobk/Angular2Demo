import { Component } from '@angular/core';
import { Hero, HEROES } from './hero'

import { HeroService } from './hero.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private heroService: HeroService) {
    this.heroService.getHeroes().then(results => this.heroes = results);
  }
  title = 'Tour Of Heroes';
  selectedHero: Hero;
  heroes: Hero[];

  select(hero: Hero): void {
    this.selectedHero = hero;
  }
}

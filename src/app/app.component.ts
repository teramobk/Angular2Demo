import { Component } from '@angular/core';
import { Hero, HEROES } from './hero'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour Of Heroes';
  myHero: Hero = {
    id: 100,
    name: 'Superman'
  }
  heroes: Hero[] = HEROES;
}

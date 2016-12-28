import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  providers: [HeroService]
})
export class HeroesComponent {
	title = 'Tour of Heroes';
	selectedHero: Hero;
	heroes: Hero[];

	//Auto called and keeps logic out of the constructor
	ngOnInit(): void {
		this.getHeroes();
	}

	onSelect(hero: Hero): void {
		this.selectedHero = hero;
		console.log(hero.name);
	}

	constructor(private router: Router, private heroService: HeroService) {
	}

	getHeroes(): void {
		this.heroService.getHeroes().then(heroes => this.heroes = heroes);
	}

	gotoDetail(): void {
    	this.router.navigate(['/detail', this.selectedHero.id])
  	}
}

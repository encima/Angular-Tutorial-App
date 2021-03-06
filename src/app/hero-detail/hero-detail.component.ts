import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';

import { HeroService } from '../hero.service';
import { Hero } from '../hero';

import 'rxjs/add/operator/switchMap'; //TODO read up on

@Component({
  selector: 'hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css'],
  providers: [HeroService]
})
export class HeroDetailComponent implements OnInit {

	@Input()
    hero: Hero;

  constructor(private heroService: HeroService,
  private route: ActivatedRoute,
  private location: Location) { }

  ngOnInit() {
    this.route.params.switchMap((params: Params) => this.heroService.getHero(+params['id'])).subscribe(hero=>this.hero=hero);
  }

  goBack(): void {
    this.location.back();
  }

  

}

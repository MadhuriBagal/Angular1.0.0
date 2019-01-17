import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../Services/hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
		
  Heroes: Hero[] = [];

  constructor(private heroService:HeroService) { }

  ngOnInit() {
  	this.getHeroes();
  }

  getHeroes(): void {
   this.heroService.getHeroes()
      .subscribe(heroes => this.Heroes = heroes.slice(1, 5));
      //.subscribe(heroes => this.Heroes = heroes);
  }

}

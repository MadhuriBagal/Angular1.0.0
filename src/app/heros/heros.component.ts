import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../Services/hero.service';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent implements OnInit {
  
  Heroes: Hero[]; 
//  SelectedHero: Hero;

  constructor(private heroService:HeroService) { }
  
  ngOnInit() {
  	this.getHeroes();
  }

  getHeroes(): void {
   this.heroService.getHeroes()
      .subscribe(heroes => this.Heroes = heroes);
  }

//  selectedhero(hero){
//    this.SelectedHero = hero;
//  }

}

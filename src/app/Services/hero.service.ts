import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
//import 'rxjs/add/observable/of';
import { of } from 'rxjs/observable/of';

import { HEROES } from '../mock-heroes';
import { Hero } from '../hero';
import { MessageService } from '../Services/message.service';

@Injectable()
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
  	this.messageService.add("Heroes Services: Data fetched");
  	return of(HEROES);
  }

}

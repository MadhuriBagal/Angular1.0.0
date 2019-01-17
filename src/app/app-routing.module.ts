import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HerosComponent } from './heros/heros.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent }  from './hero-detail/hero-detail.component';

const route: Routes = [
	{ path: '', redirectTo: '/dashboard', pathMatch: 'full' },
	//{ path: '', component: DashboardComponent}, // Default path set to Dashboard in another way
  	{ path: 'dashboard', component: DashboardComponent },
  	{ path: 'detail/:id', component: HeroDetailComponent },
  	{ path: 'heros', component: HerosComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(route) ],
  exports: [
  	 RouterModule 
  ],
  declarations: []
})
export class AppRoutingModule {}

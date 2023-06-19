import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HipageComponent } from './hipage/hipage.component';
import { WhatisComponent } from './whatis/whatis.component';
import { CardsComponent } from './cards/cards.component';
import { AboutmeComponent } from './aboutme/aboutme.component';

const routes: Routes = [
  { 
    path: '', 
    redirectTo: 'hellothere', 
    pathMatch: 'full',
  },
  { 
    path: 'hellothere',
    component: HipageComponent,
    data:{
      animation: 'hello'
    },
  },
  { 
    path: 'whereare',
    component: WhatisComponent,
    data:{
      animation: 'where'
    },
  },
  { 
    path: 'cards', component: CardsComponent,
    data:{
      animation: 'card'
    },
  },
  { 
    path: 'me', component: AboutmeComponent,
    data:{
      animation: 'we'
    },
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }


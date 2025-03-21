import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TourofheroesComponent } from '../tourofheroes.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { HeroeslistComponent } from '../heroeslist/heroeslist.component';


const routes: Routes = [
  {
    path: '', component: TourofheroesComponent, children: [
      { path: "dashboard", component: DashboardComponent },
      { path: "heroes-list", component: HeroeslistComponent },
      { path: "", component: DashboardComponent, pathMatch: 'full' },
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})



export class TourofheroesRoutingModule { }

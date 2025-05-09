import { Component } from '@angular/core';
import { HeroserviceService } from '../heroservice.service';
import { Hero } from '../hero';
import { UpperCasePipe } from '@angular/common'
import { DashboardDetailsComponent } from "../dashboard-details/dashboard-details.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [UpperCasePipe, DashboardDetailsComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.less'
})
export class DashboardComponent {

  constructor(private heroesList: HeroserviceService) {
    this.topHeroes = heroesList.getHeroes().slice(0, 4)
  }

  topHeroes: Hero[] = []

  getUserInfo !: Hero[];
  show: boolean = false;

  getInfo(id: number) {
    const info = this.topHeroes.filter(_ => _.id == id)
    this.getUserInfo = info;
    this.show = true;
  }



}

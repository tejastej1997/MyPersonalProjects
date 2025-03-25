import { Component } from '@angular/core';
import { HeroserviceService } from '../heroservice.service';
import { Hero } from '../hero';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.less'
})
export class DashboardComponent {

  constructor(private heroesList: HeroserviceService) {
    this.topHeroes = heroesList.getHeroes()
  }

  topHeroes: Hero[] = []




}

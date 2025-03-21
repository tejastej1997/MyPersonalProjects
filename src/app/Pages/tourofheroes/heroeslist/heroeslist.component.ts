import { Component, Input, Output } from '@angular/core';
import { Hero } from '../hero';
import { CommonModule } from '@angular/common';
import { listOfHeroes } from '../mock-heroes';
import { HeroeditingComponent } from "../heroediting/heroediting.component";
import { HeroserviceService } from '../heroservice.service';

@Component({
  selector: 'app-heroeslist',
  standalone: true,
  imports: [CommonModule, HeroeditingComponent],
  templateUrl: './heroeslist.component.html',
  styleUrl: './heroeslist.component.less'
})
export class HeroeslistComponent {

  @Input() passData?: string = this.selectedhero?.name;
  getHeroes: Hero[] = [];


  constructor(public heroList: HeroserviceService) {
    this.getHeroes = this.heroList.getHeroes();
  }

  selectedhero?: Hero;


  selectHero(hero: Hero) {
    this.selectedhero = hero;
  }
}

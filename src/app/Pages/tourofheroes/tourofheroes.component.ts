import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-tourofheroes',
  standalone: true,
  imports: [RouterLink,RouterOutlet,RouterLinkActive],
  templateUrl: './tourofheroes.component.html',
  styleUrl: './tourofheroes.component.less'
})
export class TourofheroesComponent {

  isTrue: boolean = false;

  testingData: string[] = ['mango', 'grapes', 'banana']

  getResults() {
    this.isTrue = true;
  }

  backResults() {
    this.isTrue = false;
  }
}

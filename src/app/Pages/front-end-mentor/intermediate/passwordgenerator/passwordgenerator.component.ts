import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-passwordgenerator',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './passwordgenerator.component.html',
  styleUrl: './passwordgenerator.component.less'
})
export class PasswordgeneratorComponent {



  constructor() {
    console.log(this.rangeValue);

  }

  generatedPassword!: number;
  roundoffPassword!: number;

  rangeValue!: number;

  getRangeValue() {
    const random = Math.random()
    this.generatedPassword = random;
    this.roundoffPassword = Math.pow(random, 5)
  }

}

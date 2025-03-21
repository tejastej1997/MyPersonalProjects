import { Component, Input } from '@angular/core';
import { Hero } from '../hero';
import { FormsModule } from '@angular/forms'


@Component({
  selector: 'app-heroediting',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './heroediting.component.html',
  styleUrl: './heroediting.component.less'
})
export class HeroeditingComponent {
  text: string = ''
  @Input() getData?: string;

  constructor() {


  }
}

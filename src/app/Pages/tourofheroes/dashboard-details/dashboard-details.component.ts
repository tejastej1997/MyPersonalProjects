import { Component, input } from '@angular/core';
import { Hero } from '../hero';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dashboard-details',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './dashboard-details.component.html',
  styleUrl: './dashboard-details.component.less'
})
export class DashboardDetailsComponent {

  getUserInfo = input.required<Hero[]>()


}

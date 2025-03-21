import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-front-end-mentor',
  standalone: true,
  imports: [RouterLink, RouterOutlet,RouterLinkActive],
  templateUrl: './front-end-mentor.component.html',
  styleUrl: './front-end-mentor.component.less'
})
export class FrontEndMentorComponent {
  getRoute() {
   

  }
}

import { Component } from '@angular/core';
import { ActivatedRoute, Event, NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { PageloadingComponent } from "./Pages/Shared/pageloading/pageloading.component";
import { MarkdownModule, provideMarkdown } from 'ngx-markdown';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, PageloadingComponent,MarkdownModule],
  providers:[provideMarkdown()],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less'
})
export class AppComponent {


  constructor(public router: Router, public activeted: ActivatedRoute) {
    this.navigationInterceptor()
  }

  loading: boolean = false;


  navigationInterceptor() {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        this.loading = true;

      }
      else if (event instanceof NavigationEnd) {
        setTimeout(() => {
          this.loading = false; // Hide loader
        }, 2000);
      }
      else if (event instanceof NavigationError) {
        setTimeout(() => {
          this.loading = false; // Hide loader
        }, 2000);
      }
      else if (event instanceof NavigationCancel) {
        setTimeout(() => {
          this.loading = false; // Hide loader
        }, 2000);
      }

    });

  }






}

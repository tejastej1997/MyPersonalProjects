import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { ProductListWithcartComponent } from "./product-list-withcart/product-list-withcart.component";

@Component({
  selector: 'app-newbie',
  standalone: true,
  imports: [RouterLink, RouterOutlet, ProductListWithcartComponent],
  templateUrl: './newbie.component.html',
  styleUrl: './newbie.component.less'
})
export class NewbieComponent {

  constructor(public router: Router) {

  }

  openInNewWindow(route: string) {
    const getUrl = this.router.createUrlTree([route])
    const url = this.router.serializeUrl(getUrl)
    console.log(this.router.serializeUrl(this.router.createUrlTree([route])));

    window.open(url, "_blank")
  }
}

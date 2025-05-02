import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { ProductListWithcartComponent } from "./product-list-withcart/product-list-withcart.component";
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { PreviewComponent } from './product-list-withcart/preview/preview.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-newbie',
  standalone: true,
  imports: [HttpClientModule],
  providers: [DialogService],
  templateUrl: './newbie.component.html',
  styleUrl: './newbie.component.less'
})
export class NewbieComponent {
  dialogReferance: DynamicDialogRef | undefined
  dialogService = inject(DialogService);
  productWithListReadmefile: string = '';
  productWithListStyleguide: string = '';

  ngOnInit() {

  }

  constructor(public router: Router, public http: HttpClient) {
    this.http.get('assets/Readme files/01_product-list-with-cart-main/style-guide.md', { responseType: 'text' }).subscribe(data => this.productWithListReadmefile = data);
    http.get('assets/Readme files/01_product-list-with-cart-main/projectReadme.md', { responseType: 'text' }).subscribe(data => this.productWithListStyleguide = data)

  }

  openInNewWindow(route: string) {
    const getUrl = this.router.createUrlTree([route])
    const url = this.router.serializeUrl(getUrl)
    console.log(this.router.serializeUrl(this.router.createUrlTree([route])));

    window.open(url, "_blank")
  }

  openModal() {
    this.dialogReferance = this.dialogService.open(PreviewComponent, {
      header: 'OverView Of the Project',
      width: '90%',
      modal: true,
      closable: true,
      styleClass: 'newbiecomponent previewcomponent',
      data: {
        file: this.productWithListReadmefile,
        info: this.productWithListStyleguide,
        projectPath: '/productlistwithcart'
      }
    })
  }
}

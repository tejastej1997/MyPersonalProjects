import { Component, Input } from '@angular/core';
import { ImagesPathService } from '../../../Shared/images-path.service'
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MarkdownModule } from 'ngx-markdown'
import { PreviewComponent } from "./preview/preview.component";
import { GetProductDataService } from './get-product-data.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-product-list-withcart',
  standalone: true,
  imports: [HttpClientModule, MarkdownModule, PreviewComponent],
  templateUrl: './product-list-withcart.component.html',
  styleUrl: './product-list-withcart.component.less'
})
export class ProductListWithcartComponent {
  readmeFileText: string = "";
  projectInfo: string = "";

  constructor(public http: HttpClient) {
  }

  onSubmit(value: string) {

  }

  ngOnInit() {
    this.http.get('assets/Readme files/01_product-list-with-cart-main/style-guide.md', { responseType: 'text' }).subscribe((data) => {
      this.readmeFileText = data;
    })

    this.http.get('assets/Readme files/01_product-list-with-cart-main/projectReadme.md', { responseType: 'text' }).subscribe((data) => {
      this.projectInfo = data;
    })


  }



  image = ImagesPathService



}

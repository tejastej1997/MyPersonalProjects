import { Component, inject, Input } from '@angular/core';
import { ImagesPathService } from '../../../Shared/images-path.service'
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MarkdownModule } from 'ngx-markdown'
import { PreviewComponent } from "./preview/preview.component";
import { GetProductDataService } from './get-product-data.service';
import { NgForm } from '@angular/forms';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-product-list-withcart',
  standalone: true,
  imports: [HttpClientModule, MarkdownModule],
  providers: [DialogService],
  templateUrl: './product-list-withcart.component.html',
  styleUrl: './product-list-withcart.component.less'
})
export class ProductListWithcartComponent {
  readmeFileText: string = "";
  projectInfo: string = "";
  dialogReferance: DynamicDialogRef | undefined;
  readonly dialogService = inject(DialogService);

  constructor(public http: HttpClient) {
  }

  onSubmit(value: string) {

  }

  ngOnInit() {
  }



  image = ImagesPathService





}

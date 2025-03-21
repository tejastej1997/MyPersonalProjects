import { Component } from '@angular/core';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog'
import { ProductDetail } from '../../product-data';
import { ImagesPathService } from '../../../../../Shared/images-path.service';


@Component({
  selector: 'app-order-confirm-dialog',
  standalone: true,
  imports: [],
  templateUrl: './order-confirm-dialog.component.html',
  styleUrl: './order-confirm-dialog.component.less'
})
export class OrderConfirmDialogComponent {

  receivedCartList: ProductDetail[] = [];

  constructor(public ref: DynamicDialogRef, public config: DynamicDialogConfig, public imagePath: ImagesPathService) {
    this.receivedCartList = config.data.itemData;
  }


  public get imagesPath(): string {
    return this.imagePath.getImagepath + '/01_product-list-with-cart-main/'
  }

  getSum(): number {
    var sum: number = 0;
    this.receivedCartList.forEach((e) => {
      sum = sum + (e.quantity * e.price)
    });

    return sum
  }

  closeDialog() {
    this.ref.close();
    this.receivedCartList.map((data) => {
      data.quantity = 1,
        data.isvisible = false
    })
  }



}



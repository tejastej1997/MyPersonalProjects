import { Component } from '@angular/core';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog'
import { ProductDetail } from '../../product-data';
import { ImagesPathService } from '../../../../../Shared/images-path.service';
import { GetProductDataService } from '../../get-product-data.service';


@Component({
  selector: 'app-order-confirm-dialog',
  standalone: true,
  imports: [],
  templateUrl: './order-confirm-dialog.component.html',
  styleUrl: './order-confirm-dialog.component.less'
})
export class OrderConfirmDialogComponent {



  constructor(public ref: DynamicDialogRef, public config: DynamicDialogConfig, public imagePath: ImagesPathService, private cartData: GetProductDataService) {

  }


  public get imagesPath(): string {
    return this.imagePath.getImagepath + '/01_product-list-with-cart-main/'
  }


  public get cartItems(): ProductDetail[] {
    return this.cartData.cartItems
  }


  getSum(): number {
    var sum: number = 0;
    this.cartItems.forEach((e) => {
      sum = sum + (e.quantity * e.price)
    });

    return sum
  }

  closeDialog() {
    this.ref.close();
    this.cartData.getProductData().map((data) => {
      data.quantity = 1,
        data.isvisible = false
    })
    this.cartItems.length = 0;
  }



}



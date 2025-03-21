import { Component } from '@angular/core';
import { GetProductDataService } from '../get-product-data.service';
import { ProductDetail } from '../product-data';
import { ImagesPathService } from '../../../../Shared/images-path.service';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog'
import { OrderConfirmDialogComponent } from './order-confirm-dialog/order-confirm-dialog.component';

@Component({
  selector: 'app-product-list-withcart-app',
  standalone: true,
  imports: [],
  providers: [DialogService],
  templateUrl: './product-list-withcart-app.component.html',
  styleUrl: './product-list-withcart-app.component.less'
})
export class ProductListWithcartAppComponent {
  itemList: ProductDetail[] = [];
  cartItems: ProductDetail[] = [];
  sectionVisible: number | null = null;
  showQty: boolean = false

  constructor(private data: GetProductDataService, private imagePath: ImagesPathService, public dialogservice: DialogService) {
    this.itemList = this.getData()

  }

  ref: DynamicDialogRef | undefined;

  getData() {
    return this.data.getProductData()
  }

  get imagesPath(): string {
    return this.imagePath.getImagepath + '/01_product-list-with-cart-main/'
  }

  incrementItem(id: number): number {
    var quantity = this.getData().find(e => id === e.id)

    if (quantity) {
      quantity.quantity = quantity.quantity + 1
    }

    this.getSum()

    return quantity?.quantity || 0

  }

  decrementItem(id: number): number {

    var quantity = this.getData().find(e => id === e.id)

    if (quantity && quantity.quantity > 1) {
      quantity.quantity = quantity.quantity - 1

    }
    if (quantity && quantity.quantity == 1) {
      quantity.isvisible = false;

      const index = this.cartItems.findIndex(e => e.id === id)
      this.cartItems.splice(index, 1)

    }


    this.getSum();
    return quantity?.quantity || 1

  }

  addItem(receivedItem: ProductDetail) {
    this.cartItems.push(receivedItem)
    receivedItem.isvisible = true
    this.getSum()
  }

  getSum(): number {
    var sum: number = 0;
    this.cartItems.forEach((e) => {
      sum = sum + (e.quantity * e.price)
    });

    return sum
  }

  removeFromCart(index: number, id: number) {
    this.cartItems.splice(index, 1);
    this.itemList.find(item => {
      if (item.id === id) {
        item.quantity = 1;
        item.isvisible = false;
      }
    })
  }

  openModal() {
    this.ref = this.dialogservice.open(OrderConfirmDialogComponent, {
      data: {
        itemData: this.cartItems
      },
      width: '25%',
      modal: true,
      showHeader: false,
      header: 'Order Confirmed',
      closable: true
    })
  }


}

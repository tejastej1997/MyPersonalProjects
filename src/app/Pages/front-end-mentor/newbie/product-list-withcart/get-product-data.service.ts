import { Injectable } from '@angular/core';
import { productData } from './Document Files/json/data.json'
import { ProductDetail, RootObject } from './product-data';

@Injectable({
  providedIn: 'root'
})
export class GetProductDataService {

  constructor() {
  }

  cartItems: ProductDetail[] = [];

  getProductData(): ProductDetail[] {
    return productData.productDetails;
  }


  getCartitem(receivedData: ProductDetail): ProductDetail[] {
    this.cartItems.push(receivedData);
    console.log(this.cartItems);
    
    return this.cartItems;
  }

}

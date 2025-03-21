import { Injectable } from '@angular/core';
import { productData } from './Document Files/json/data.json'
import { ProductDetail, RootObject } from './product-data';

@Injectable({
  providedIn: 'root'
})
export class GetProductDataService {

  constructor() {
  }

  getProductData(): ProductDetail[] {
    return productData.productDetails;
  }
}

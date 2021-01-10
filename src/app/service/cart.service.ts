import { Injectable } from '@angular/core';
import {Product  } from 'src/app/models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items = [
    new Product(1,'product1','product1 description',100,'','Fruits'),
    new Product(2,'product2','product2 description',100,'','Fruits'),
    new Product(3,'product3','product3 description',100,'','Fruits'),
    new Product(4,'product4','product4 description',100,'','Fruits'),
    new Product(5,'product5','product5 description',100,'','Fruits'),
    new Product(6,'product6','product6 description',100,'','Fruits')
  ]

  constructor() { }
  getitems(): Product[]{
    return this.items 
  }
  addToCart(product) {
    this.items.push(product);
  }

  // getItems() {
  //   return this.items;
  // }

  // clearCart() {
  //   this.items = [];
  //   return this.items;
  // }
}

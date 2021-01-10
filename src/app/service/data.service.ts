import { Injectable } from '@angular/core';
import {Product  } from 'src/app/models/product';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  items = [
    new Product(1,'product','product description',100,'','Fruits')
    
  ]

  constructor() { }
    getitems(): Product[]{
      return this.items 
    }
    addToCart(product) {
      this.items.push(product);
    }
  }
 


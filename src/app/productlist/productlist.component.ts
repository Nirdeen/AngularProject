import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service'
import { Product } from '../models/product';
@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {
  // data: any; 
  // productsArr: any;
  productlist:Product[] = []

  constructor( private CartService : CartService) { }

  ngOnInit() {
//  console.log(this.CartService.getItems())
this.productlist = this.CartService.getitems()

    
  }


}

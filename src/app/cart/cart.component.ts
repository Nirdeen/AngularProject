import { Component, OnInit } from '@angular/core';
// import { DataService} from 'src/app/service/data.service'; 
import { DataService } from 'src/app/service/data.service'
import { Product } from '../models/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  productlist:Product[] = []

  constructor( private DataService : DataService) { }
  ngOnInit(): void {
    this.productlist = this.DataService.getitems()

    
  
  
 

}

}

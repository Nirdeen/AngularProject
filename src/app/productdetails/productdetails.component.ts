import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import {Product  } from '../models/product';
import { DataService} from '../service/data.service';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {

 
    productlist:Product[] = []

    constructor( private dataService : DataService) { }
    ngOnInit(): void {
      this.productlist = this.dataService.getitems()
  
  

}
}

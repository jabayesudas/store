import { Component, OnInit, Input } from '@angular/core';
import { Products } from '../model/product';

@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.css']
})
export class ProductDescriptionComponent implements OnInit {

  @Input() product: Products;


  constructor() {
   }

  ngOnInit() {
  }
}

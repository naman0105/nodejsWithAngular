import { Component, OnInit } from '@angular/core';

import { ProductsService } from '../products.service';
import { RecommendationItemComponent } from './recommendation-item/recommendation-item.component';

@Component({
  selector: 'app-recommendation-bar',
  templateUrl: './recommendation-bar.component.html',
  styleUrls: ['./recommendation-bar.component.scss'],
  providers: [ProductsService]

})
export class RecommendationBarComponent implements OnInit {

  constructor(private productservice : ProductsService) {}
  productsData = [
    {
      _id : 1,
      name : "pepsi",
      price : 35,
      discount : 10,
      location : {
        2 : [3,1],
        3 : [2,4],
        4 : [3,5],
        5 : [4,6],
        6 : [1,5]
      }
    },
    {
      _id : 2,
      name : "coca cola",
      price : 35,
      discount : 8,
      location : {
        1 : [2,6],
        3 : [2,4],
        4 : [3,5],
        5 : [4,6],
        6 : [1,5]
      }
    }
    ];

  ngOnInit() {
    this.productservice.getProducts().subscribe(data => this.productsData = data);
  }

}

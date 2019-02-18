import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-recommendation-item',
  templateUrl: './recommendation-item.component.html',
  styleUrls: ['./recommendation-item.component.scss']
})
export class RecommendationItemComponent implements OnInit {
  @Input() productData : any;
  productImage;
  constructor() { }

  ngOnInit() {
    console.log(this.productData)
    this.productImage = "../../../assets/ProductsImages/" + this.productData.name + ".png";
  }

}

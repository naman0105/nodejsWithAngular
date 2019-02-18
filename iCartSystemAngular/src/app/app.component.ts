import { Component, NgModule } from '@angular/core';

import { ProductsService } from './products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ProductsService]
})
export class AppComponent {

  constructor(private productservice : ProductsService) {}
  title = 'iCartSystemAngular';
  repdata= {some : "data"};

  ngOnInit(){
    this.productservice.getProducts().subscribe(data => this.repdata = data);
  }
}

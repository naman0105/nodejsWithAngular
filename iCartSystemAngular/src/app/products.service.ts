import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: Http) { }

  getProducts() {
    return this.http.get('http://localhost:3000/products')
            .map((response: Response) => response.json())
  }
}

import { Component, OnInit } from '@angular/core';
import {Product} from '../../shared/models/product';
import {ProductService} from '../../shared/services/product.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  product: Product[];

  constructor(private productService: ProductService,
              private router: Router) { }

  ngOnInit() {

  }

  delete(id: number) {
    this.productService.deleteProduct(id)
      .subscribe(message => {
        this.refresh();
        });
  }

  refresh() {
    this.productService.getProducts()
      .subscribe(listOfProducts => {
        this.product = listOfProducts;
      });
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Product, productsList } from '../products/products.mock';
import { ApiService } from '../services/api.service';
import { IProduct } from '../models/product.model';
import { error, log } from 'console';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css',
})
export class ProductDetailsComponent implements OnInit {
  constructor(
    private _route: ActivatedRoute,
    private _apiService: ApiService
  ) {}

  product?: IProduct;
  productList: IProduct[] = [];
  loading: boolean = true;

  ngOnInit(): void {
    this._route.params.subscribe({
      next: (params: Params) => {
        this._apiService.getProductById(Number(params['productId'])).subscribe({
          next: (data: IProduct) => {
            this.product = data;
            this.loading = false;
          },
          error: (error) => console.error(`Error: ${error}`),
        });
      },
      error: (error) => console.log(error),
    });
  }
}

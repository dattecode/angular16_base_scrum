import { Component, OnInit } from '@angular/core';
import { productsList } from './products.mock';
import { ApiService } from '../services/api.service';
import { IProduct } from '../models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent implements OnInit {
  productsList = productsList;
  products: IProduct[] = [];
  loading: boolean = true;

  constructor(private _apiService: ApiService) {}

  ngOnInit(): void {
    this._apiService.getProducts().subscribe({
      next: (data: IProduct[]) => {
        this.products = data;
      },
      error: (e) => {
        console.log(e);
      },
    });
    setTimeout(() => {
      this.loading = false;
    }, 1500);
  }
}

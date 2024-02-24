import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  products: IProduct[] = []

  private baseUrl = "https://fakestoreapi.com/products"

  constructor(private _http:HttpClient) { }

  public getProducts(): Observable<IProduct[]>{
    return this._http.get<IProduct[]>(this.baseUrl)
  }

  public getProductById(id:number): Observable<IProduct>{
    return this._http.get<IProduct>(`${this.baseUrl}/${id}`)
  }

}

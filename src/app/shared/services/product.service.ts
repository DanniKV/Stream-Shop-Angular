import {Product} from '../models/product';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ProductService {
  apiUrl = 'https://streamboss.azurewebsites.net/api/product';
  //apiUrl = 'http://localhost:64357/api/product'; //Postman Port


  constructor(private http: HttpClient) {
  }

  //Crud Operations!

  addProduct(product: Product): Observable<Product> {
    debugger;
    return this.http.post<Product>(this.apiUrl, product);
  }
  /*
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }
  updateProduct(product: Product): Observable<Product> {
    return this.http.put<Product>(this.apiUrl  + product.id, product)
  }
  getProductById(id: number): Observable<Product> {
    return this.http.get<Product>(this.apiUrl + id)
  }
  deleteProduct(id: number): Observable<Product> {
    return this.http.delete(this.apiUrl + id)
  }
  **/
}

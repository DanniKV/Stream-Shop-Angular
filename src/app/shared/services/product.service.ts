import {Products} from '../models/products';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ProductService {
  apiUrl = 'https://streamboss.azurewebsites.net/api/product';


  constructor(private http: HttpClient) {

  }
  //Crud Operations!

  getProducts(): Observable<Products[]> {
    return this.http.get<Products[]>(this.apiUrl);
  }
  addProduct(product: Products): Observable<Products> {
    return this.http.post<Products>(this.apiUrl, product);
  }
  updateProduct(product: Products): Observable<Products> {
    return this.http.put<Products>(this.apiUrl + '/' + product.id, product)
  }
  getProductById(id: number): Observable<Products> {
    return this.http.get<Products>(this.apiUrl + '/' + id)
  }
  deleteProduct(id: number): Observable<Products> {
    return this.http.delete(this.apiUrl + '/' + id)
  }
}

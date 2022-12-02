import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListModel } from '../models/list.model';
import { ProductModel } from '../models/product.model';

@Injectable()
export class ListService {
  constructor(private _httpClient: HttpClient) {}

  getAll(): Observable<ListModel[]> {
    return this._httpClient.get<ListModel[]>(
      'https://fakestoreapi.com/products'
    );
  }

  getOne(id: unknown): Observable<ProductModel> {
    return this._httpClient.get<ProductModel>(
      'https://fakestoreapi.com/products/' + id
    );
  }
}

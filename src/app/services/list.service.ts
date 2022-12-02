import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListModel } from '../models/list.model';

@Injectable()
export class ListService {
  constructor(private _httpClient: HttpClient) {}

  getAll(): Observable<ListModel[]> {
    return this._httpClient.get<ListModel[]>(
      'https://fakestoreapi.com/products'
    );
  }
}

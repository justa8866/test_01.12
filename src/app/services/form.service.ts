import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListModel } from '../models/list.model';

@Injectable()
export class FormService {
  constructor(private _httpClient: HttpClient) {}

  create(form: { password: any; username: any }): Observable<ListModel> {
    return this._httpClient.post<ListModel>(
      'https://fakestoreapi.com/auth/login',
      form
    );
  }

}

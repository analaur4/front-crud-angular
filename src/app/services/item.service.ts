import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Item } from '../models/item.model';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  baseUrl: string = 'http://localhost:8080/api/Item';

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    }),
  };

  getItems() {
    return this.http.get<Item[]>(this.baseUrl, this.httpOptions);
  }
}

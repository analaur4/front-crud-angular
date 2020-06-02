import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Item } from '../models/item.model';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  // baseUrl: string = 'http://localhost:8080/api/Item';
  baseUrl: string = 'http://localhost:3001/todo';

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    }),
  };

  getItems() {
    return this.http.get<Item>(this.baseUrl, this.httpOptions);
  }

  getItem(id: number) {
    return this.http.get<Item>(`${this.baseUrl}/${id}`,this.httpOptions);
  }

  updateItem(item: Item) {
    return this.http.put<Item>(`${this.baseUrl}/${item.id}`, item, this.httpOptions);
  }

  createItem(item: Item) {
    return this.http.post<Item>(this.baseUrl, item, this.httpOptions);
  }

  deleteItem(id: number) {
    return this.http.delete<Item>(`${this.baseUrl}/${id}`, this.httpOptions);
  }

  getItemMateria(mat: string) {
    return this.http.get<Item>(`${this.baseUrl}/${mat}`, this.httpOptions)
  }
}

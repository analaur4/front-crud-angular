import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Item } from '../models/item.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, EMPTY } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  baseUrl: string = 'https://apirest-todolist.herokuapp.com/api/item';

  httpOptions = {
    headers: new HttpHeaders({ 
      'Content-Type': 'application/json',
      'responseType': 'text',
      'Accept': '*/*',
      'Access-Control-Allow-Origin': '*'
    })
  }

  constructor(private http: HttpClient, private snackBar: MatSnackBar) { }

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ['msg-error'] : ['msg-success']
    });
  }

  errorHandler(e: any): Observable<any> {
    this.showMessage('Ocorreu um erro!', true);
    return EMPTY;
  }

  getItems(): Observable<Item[]> {
    return this.http.get<Item[]>(this.baseUrl, this.httpOptions).pipe(
      map(obj => obj)
    );
  }

  getItem(id: number): Observable<Item> {
    return this.http.get<Item>(`${this.baseUrl}/id/${id}`, this.httpOptions);
  }

  updateItem(item: Item): Observable<Item> {
    return this.http.put<Item>(`${this.baseUrl}/id/${item.id}`, item, this.httpOptions).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  createItem(item: Item): Observable<Item> {
    let objToSave = JSON.stringify(item);
    return this.http.post<Item>(this.baseUrl, objToSave, this.httpOptions).pipe(
      map(obj => obj)
    );
  }

  deleteItem(id: number): Observable<Item> {
    return this.http.delete<Item>(`${this.baseUrl}/id/${id}`, this.httpOptions).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    );
  }

}

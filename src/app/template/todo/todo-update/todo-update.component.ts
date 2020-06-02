import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/models/item.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todo-update',
  templateUrl: './todo-update.component.html',
  styleUrls: ['./todo-update.component.css']
})
export class TodoUpdateComponent implements OnInit {

  item: Item;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  updateToDo() {
    console.log(this.item);
    this.router.navigate(['/todo']);
  }

  cancel() {
    this.router.navigate(['/todo']);
  }

}

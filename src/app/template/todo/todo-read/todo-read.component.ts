import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/models/item.model';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-todo-read',
  templateUrl: './todo-read.component.html',
  styleUrls: ['./todo-read.component.css']
})
export class TodoReadComponent implements OnInit {

  listItems: Item[];

  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
    this.readItems();
  }

  private readItems() {
    this.itemService.getItems().subscribe(items => {
      this.listItems = items;
    })
  }

  deleteToDo() {
    console.log(this.listItems);
  }
}

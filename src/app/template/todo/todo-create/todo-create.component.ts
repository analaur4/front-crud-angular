import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/models/item.model';
import { Router } from '@angular/router';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-todo-create',
  templateUrl: './todo-create.component.html',
  styleUrls: ['./todo-create.component.css']
})
export class TodoCreateComponent implements OnInit {

  item: Item = {
    materia: '',
    tarefa: '',
    dtEntrega: null,
    status: null
  }

  constructor(private router: Router, private itemService: ItemService) { }

  ngOnInit(): void {
  }

  createToDo() {
    this.itemService.createItem(this.item).subscribe(() => {
      console.log(this.item);
    })
    this.router.navigate(['/todo']);
  }

  cancel() {
    this.router.navigate(['/todo']);
  }
}

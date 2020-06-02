import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/models/item.model';
import { Router } from '@angular/router';

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

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  createToDo() {
    console.log(this.item);
    this.router.navigate(['/todo']);
  }

  cancel() {
    this.router.navigate(['/todo']);
  }
}

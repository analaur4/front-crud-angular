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

  item: Item = new Item();

  constructor(private router: Router, private itemService: ItemService) { }

  ngOnInit(): void {
  }

  createToDo(): void {
    this.itemService.createItem(this.item).subscribe(() => {
      console.log(this.item )
      this.itemService.showMessage('Item criado com sucesso!')
      this.router.navigate(['/todo']);
    }, respError => {
      this.itemService.showMessage('Erro na criação', true)
      console.log(respError);
      console.log(this.item)
    })
  }

  cancel() {
    this.router.navigate(['/todo']);
  }
}

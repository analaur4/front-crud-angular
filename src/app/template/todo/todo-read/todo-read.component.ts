import { Component, OnInit, Output } from '@angular/core';
import { Item } from 'src/app/models/item.model';
import { ItemService } from 'src/app/services/item.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-todo-read',
  templateUrl: './todo-read.component.html',
  styleUrls: ['./todo-read.component.css']
})
export class TodoReadComponent implements OnInit {

  listItems: Item[];
  listMaterias: string;
  result: boolean = false;

  constructor(private itemService: ItemService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.readItems();
  }

  private readItems() {
    this.itemService.getItems().subscribe(items => {
      this.listItems = items;
      if (items == null) {
        this.result = true;
      } else {
        this.result = false;
      }
    }, respError => {
      console.log(respError);
    })
  }

  searchMateria() {
    this.itemService.getItemMateria(this.listMaterias).subscribe(items => {
      this.listItems = items;
      if (items == null) {
        this.result = true;
      } else {
        this.result = false;
      }
    }, respError => {
      console.log(respError)
    })
  }

  deleteToDo(id: number) {
    this.itemService.deleteItem(id).subscribe(() => {
      this.listItems.slice(id, 1);
      this.itemService.showMessage('Item deletado com sucesso!');
    }, respError => {
      this.itemService.showMessage(`Erro ao excluir item`, true)
    })
    location.reload();
  }
}

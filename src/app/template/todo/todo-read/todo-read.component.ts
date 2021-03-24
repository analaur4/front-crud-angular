import { Component, OnInit, Output } from '@angular/core';
import { Item } from 'src/app/models/item.model';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-todo-read',
  templateUrl: './todo-read.component.html',
  styleUrls: ['./todo-read.component.css']
})
export class TodoReadComponent implements OnInit {

  listItems: Item[];
  listMaterias: string;
  result: boolean = false;

  itemRemovido: Item;

  showLoading: boolean = false;

  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
    this.showLoading = !this.showLoading;
    this.readItems();
  }

  private readItems() {
    this.itemService.getItems().subscribe(items => {
      this.showLoading = !this.showLoading;
      this.listItems = items;
      if (items == null) {
        this.result = true;
      } else {
        this.result = false;
      }
    }, respError => {
      this.showLoading = !this.showLoading;
      this.itemService.showMessage('Erro ao carregar informações.', true);
    })
  }

  searchMateria() {
    let search = this.listMaterias;

    if (search == '') {
      this.readItems();
      this.showLoading = !this.showLoading;
      
    } else {
      if (!search) {
        return;
      } else {
        search = search.toLowerCase();
      }

      this.listItems = this.listItems.filter(e => 
        e.materia.toLowerCase().indexOf(search) != -1
      );

      if(this.listItems.length == 0) {
        this.result = true;
      }
      
    }
  }

  deleteToDo(itemRmv: Item) {
    this.showLoading = !this.showLoading;
    this.itemRemovido = itemRmv;
    this.itemService.deleteItem(this.itemRemovido.id).subscribe(() => {
      this.showLoading = !this.showLoading;
      this.itemService.showMessage('Item deletado com sucesso!');
      this.listItems = this.listItems.filter(item => item !== this.itemRemovido)
    }, respError => {
      this.itemService.showMessage(`Erro ao excluir item!`, true)
    })
  }
}

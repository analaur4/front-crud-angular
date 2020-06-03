import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/models/item.model';
import { Router, ActivatedRoute } from '@angular/router';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-todo-update',
  templateUrl: './todo-update.component.html',
  styleUrls: ['./todo-update.component.css']
})
export class TodoUpdateComponent implements OnInit {

  listItem: Item;

  constructor(private router: Router, private itemService: ItemService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.itemService.getItem(id).subscribe(item => {
      this.listItem = item;
    })
  }

  updateToDo() {
    this.itemService.updateItem(this.listItem).subscribe(() => {
      this.itemService.showMessage(`Item ${this.listItem.tarefa} atualizado!`)
    }, respError => {
      this.itemService.showMessage(`Erro na atualização do item ${this.listItem.tarefa}`, true)
    })
    this.router.navigate(['/todo']);
  }

  cancel() {
    this.router.navigate(['/todo']);
  }

}

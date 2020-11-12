import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/models/item.model';
import { Router, ActivatedRoute } from '@angular/router';
import { ItemService } from 'src/app/services/item.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-todo-update',
  templateUrl: './todo-update.component.html',
  styleUrls: ['./todo-update.component.css']
})
export class TodoUpdateComponent implements OnInit {

  listItem: Item;
  formUpdate: FormGroup;
  submitted: boolean = false;

  constructor(private router: Router, private itemService: ItemService, private route: ActivatedRoute, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.itemService.getItem(id).subscribe(item => {
      this.getValuesFormUpdate(item);
    });
  }

  get formUpdateControls() {
    return this.formUpdate.controls;
  }

  getValuesFormUpdate(item: Item): void {
    this.formUpdate = this.formBuilder.group({
      id: [''],
      materia: ['', Validators.required],
      tarefa: ['', Validators.required],
      dtEntrega: ['', Validators.required],
      status: ['']
    });

    this.formUpdate.patchValue({
      id: item.id,
      materia: item.materia,
      tarefa: item.tarefa,
      dtEntrega: item.dtEntrega,
      status: item.status
    });
  }

  updateToDo() {
    this.submitted = true;

    if(this.formUpdate.valid) {
      this.itemService.updateItem(this.formUpdate.value).subscribe(() => {
        this.itemService.showMessage(`Item '${this.formUpdateControls.tarefa.value}' atualizado!`)
        this.router.navigate(['/todo']);
        
      }, respError => {
        this.itemService.showMessage(`Erro na atualização do item '${this.formUpdateControls.tarefa.value}'`, true)
      });
    }
  }

  cancel() {
    this.router.navigate(['/todo']);
  }

}

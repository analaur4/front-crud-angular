import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/models/item.model';
import { Router } from '@angular/router';
import { ItemService } from 'src/app/services/item.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-todo-create',
  templateUrl: './todo-create.component.html',
  styleUrls: ['./todo-create.component.css']
})
export class TodoCreateComponent implements OnInit {

  item: Item = new Item();
  formCreate: FormGroup;
  submitted: boolean = false;

  constructor(private router: Router, private itemService: ItemService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formCreate = this.formBuilder.group({
      materia: ['', Validators.required],
      tarefa: ['', Validators.required],
      dtEntrega: ['', Validators.required]
    });
  }

  get formCreateControls() {
    return this.formCreate.controls;
  }

  createToDo(): void {
    this.submitted = true;
    
    if(this.formCreate.valid) {
      this.itemService.createItem(this.formCreate.value).subscribe(() => {
        this.itemService.showMessage('Item criado com sucesso!');
        this.router.navigate(['/todo']);
  
      }, respError => {
        this.itemService.showMessage('Erro na criação!', true);
        
      });
    }
  }

  cancel() {
    this.router.navigate(['/todo']);
  }
}

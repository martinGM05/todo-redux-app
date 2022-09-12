import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Todo } from '../models/todo.model';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { toggle, editar, borrar } from '../todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todo = new Todo('');
  @ViewChild('inputFisico') txtInputFisico!: HTMLInputElement;

  chkComplete: FormControl = new FormControl;
  txtInput: FormControl = new FormControl;
  editando: boolean = false;

  constructor(
    private store: Store<AppState>
  ) {

  }

  ngOnInit(): void {
    this.chkComplete = new FormControl(this.todo.completado);
    this.txtInput = new FormControl(this.todo.texto, Validators.required);

    this.chkComplete.valueChanges.subscribe(valor => {
      this.store.dispatch(toggle({id: this.todo.id}));
    });

  }

  editar(input: HTMLInputElement) {
    this.editando = true;
    setTimeout(() => {
      input.select();
    }, 1);
  }

  terminarEdicion(){
    this.editando = false;
    this.txtInput.setValue(this.todo.texto);

    if (this.txtInput.invalid) return;
    if(this.txtInput.value === this.todo.texto) return;

    this.store.dispatch(editar({id: this.todo.id, texto: this.txtInput.value}));
  }

  borrar(){
    this.store.dispatch(borrar({id: this.todo.id}))
  }

}

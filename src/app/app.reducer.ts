import { Todo } from './todos/models/todo.model';
import { filtrosValidos } from './filtro/filtro.actions';
import { ActionReducerMap } from '@ngrx/store';
import { todoReducer } from './todos/todo.reducer';
import { filtrosReducer } from './filtro/filtro.reducer';

export interface AppState {
  todos: Todo[],
  filtro: filtrosValidos
}

export const appReducers: ActionReducerMap<AppState> = {
  todos: todoReducer,
  filtro: filtrosReducer,
}

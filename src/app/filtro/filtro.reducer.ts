import { Action, createReducer, on } from '@ngrx/store';
import { setFiltro, filtrosValidos } from './filtro.actions';


export const initialState: filtrosValidos = 'todos'

export function filtrosReducer(originalState: filtrosValidos = initialState, action: Action) {
  return createReducer(
    initialState,
    on(setFiltro, (state, { filtro }) => filtro),
  )(originalState, action);
}

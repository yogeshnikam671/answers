import { Action } from '@ngrx/store';
import {tore} from '../models/store.model';

// type
export const ADD = 'Add';
export const REMOVE = 'Remove';

// type and payload = action
export class Add implements Action{
  readonly type = ADD;
  constructor( public payload: tore){}
}

export class Remove implements Action{
  readonly type = REMOVE;
  constructor( public payload: number ) {}
}

// Allows to access these actions in the reducer
export type Actions = Add | Remove;

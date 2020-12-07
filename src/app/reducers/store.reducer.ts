import {tore} from '../models/store.model';
import * as StoreActions from './../actions/store.actions';

const initialState: tore[] = [{
  name: 'Initial State',
  url: 'www.yogeshdadaelectornicsolutions.org'
}];

export const storeReducer = (state = initialState, action: StoreActions.Actions) => {
  switch (action.type) {
    case StoreActions.ADD : return [...state, action.payload];
    case StoreActions.REMOVE : return state.slice(action.payload);
    default: return state;
  }
};

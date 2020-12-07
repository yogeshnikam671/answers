import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {tore} from '../../models/store.model';
import {Store} from '@ngrx/store';
import {AppState} from '../../state/app.state';
import * as StoreActions from './../../actions/store.actions';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.scss']
})
export class AnswerComponent implements OnInit {

  storeData: Observable<tore[]>;
  name: string;
  url: string;
  isParentDataFetched: boolean;
  style: any;

  constructor(private store: Store<AppState>) {
    this.storeData = store.select('store');
  }
  addData(name, url){
    this.store.dispatch(new StoreActions.Add({name, url}));
  }

  ngOnInit(): void {
  }

  apicall(){
    this.isParentDataFetched = !this.isParentDataFetched;
  }

  onColorEvent(color: string) {
    this.style = { color };
  }
}

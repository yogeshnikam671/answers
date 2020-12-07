import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {tore} from '../../models/store.model';
import {Store} from '@ngrx/store';
import {AppState} from '../../state/app.state';
import * as StoreActions from './../../actions/store.actions';
import {AnswerService} from '../../services/answer.service';
import {filter, first, take, takeUntil, tap} from 'rxjs/operators';

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
  titles = [];

  constructor(private answerService: AnswerService, private store: Store<AppState>) {
    this.storeData = store.select('store');
  }
  addData(name, url){
    this.store.dispatch(new StoreActions.Add({name, url}));
  }

  ngOnInit(): void {
  }

  apicall(){
    this.style = { color: 'red'};
    this.answerService.getPosts().subscribe(response => {
      // @ts-ignore
      this.titles = response.map(data => data.title);
      console.log(this.titles);
      this.style = {color : 'green'};
      this.isParentDataFetched = true;
    });
    this.style = {color : 'yellow'};
  }

  onColorEvent(color: string) {
    this.style = { color };
  }
}

import {Component, ContentChild, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {redirectLoggedInTo} from '@angular/fire/auth-guard';
import {AnswerService} from '../../services/answer.service';

@Component({
  selector: 'app-gavali',
  templateUrl: './gavali.component.html',
  styleUrls: ['./gavali.component.scss']
})
export class GavaliComponent implements OnInit {
  @Input() isDataFetched: boolean;
  @Input() index: number;
  @Output() colorEvent = new EventEmitter<string>();
  @Input() title: string;
  constructor(private answerService: AnswerService) {}

  ngOnInit(): void {
  }

  onClick(){
    this.answerService.works = false;
    switch(this.index){
      case 1: this.colorEvent.emit('red'); break;
      case 2: this.colorEvent.emit('blue'); break;
      case 3: this.colorEvent.emit('green'); break;
    }
  }

}

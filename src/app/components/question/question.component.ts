import { Component, OnInit } from '@angular/core';
import {AnswerService} from '../../services/answer.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {
  works: boolean;
  constructor(private answerService: AnswerService) {
  }

  ngOnInit(): void {
    //ghetla
    this.answerService.worksObs.subscribe((response: boolean) => {
      this.works = response;
    });
  }

}

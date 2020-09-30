import {Component, OnInit, ViewEncapsulation} from '@angular/core';
// @ts-ignore
import questions from '../../data/questions.json';
// @ts-ignore
import answers from '../../data/answers.json';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SearchComponent implements OnInit {
  question: string;
  results: string[];
  questions: string[];
  answers: string[];
  constructor() {
    this.question = '';
  }

  ngOnInit(): void {
    this.questions = questions.questions;
    this.answers = answers.answers;
  }

  onClick(): void{
    const ans = [];
    this.questions.forEach((ques, index) => {
      if (this.question && this.question.trim() !== ''
            && ques.toLowerCase().includes(this.question.toLowerCase())){
        ans.push(this.answers[index]);
      }
    });
    this.results = ans;
  }
}

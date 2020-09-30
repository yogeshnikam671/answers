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
  resultsFound: boolean;
  constructor() {
    this.question = '';
  }

  ngOnInit(): void {
    this.questions = questions.questions;
    this.answers = answers.answers;
    this.resultsFound = true;
  }

  onClick(): void{
    const ans = [];
    const keywords = this.question.split(' ');
    this.questions.forEach((ques, index) => {
      if (this.question && this.question.trim() !== ''){
        let doesContainKeyword = true;
        keywords.forEach(keyword => doesContainKeyword = doesContainKeyword && ques.toLowerCase().includes(keyword.toLowerCase()));
        if (doesContainKeyword){
          ans.push(this.answers[index]);
        }
      }
    });
    if (this.question.trim() !== '' && ans.length === 0){
      this.resultsFound = false;
    }else{
      this.resultsFound = true;
    }
    this.results = ans;
  }
}

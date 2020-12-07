import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnswerService {
  worksSubject = new Subject();  // deu
  worksObs = this.worksSubject.asObservable(); // gheu
  private postsUrl = 'https://jsonplaceholder.typicode.com/posts';
  constructor(
    private http: HttpClient,
  ) { }

  getPosts(){
    return this.http.get(this.postsUrl);
  }
}



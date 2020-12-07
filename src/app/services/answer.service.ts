import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AnswerService {
  works = true;
  private postsUrl = 'https://jsonplaceholder.typicode.com/posts';
  constructor(
    private http: HttpClient,
  ) { }

  getPosts(){
    return this.http.get(this.postsUrl);
  }
}



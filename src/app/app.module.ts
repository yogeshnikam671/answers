import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { QuestionComponent } from './components/question/question.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchComponent } from './components/search/search.component';
import { AnswerComponent } from './components/answer/answer.component';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import {storeReducer} from './reducers/store.reducer';
import { GavaliComponent } from './components/gavali/gavali.component';
import {RouterModule} from '@angular/router';
import {DadaPipe} from './pipes/dada.pipe';
import {HttpClientJsonpModule, HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    QuestionComponent,
    SearchComponent,
    AnswerComponent,
    GavaliComponent,
    DadaPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    HttpClientJsonpModule,
    HttpClientModule,
    FormsModule,
    StoreModule.forRoot({
      store: storeReducer
    }),
    RouterModule.forRoot([
      {path: '', component: AnswerComponent},
      {path: 'gavali', component: GavaliComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

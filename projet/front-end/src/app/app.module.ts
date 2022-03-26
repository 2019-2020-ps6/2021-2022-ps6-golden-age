import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import {HeaderUserComponent} from './header/headerUser/headerUser.component';
import {QuizComponent} from './quizzes/quiz/quiz.component';
import {QuestionComponent} from './questions/question/question.component';
import {QuestionListComponent} from './questions/question-list/question-list.component';
import {QuestionFormComponent} from './questions/question-form/question-form.component';
import {QuizFormComponent} from './quizzes/quiz-form/quiz-form.component';
import {QuizListComponent} from './quizzes/quiz-list/quiz-list.component';
import {helpPageUserComponent} from './help/user/helpPageUser.component';
import {helpPageProComponent} from './help/pro/helpPagePro.component';
import {ShowQuizComponent} from './quizzes/show-quiz/show-quiz.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderUserComponent,
    QuizComponent,
    QuizFormComponent,
    QuizListComponent,
    QuestionComponent,
    QuestionListComponent,
    QuestionFormComponent,
    helpPageUserComponent,
    helpPageProComponent,
    ShowQuizComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

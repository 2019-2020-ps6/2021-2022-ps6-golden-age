import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import {HeaderUserComponent} from './header/headerUser/headerUser.component';

import { ThemeListComponent } from './themes/theme-list/theme-list.component';
import { ThemeFormComponent } from './themes/theme-form/theme-form.component';
import { ThemeComponent } from './themes/theme/theme.component';

import { QuestionListComponent } from './questions/question-list/question-list.component';
import { QuestionFormComponent } from './questions/question-form/question-form.component';
import { QuestionComponent } from './questions/question/question.component';
import {ShowQuestionComponent} from './questions/show-question/show-question.component';

import { QuizListComponent } from './quizzes/quiz-list/quiz-list.component';
import { QuizFormComponent } from './quizzes/quiz-form/quiz-form.component';
import { QuizComponent } from './quizzes/quiz/quiz.component';
import { EditQuizComponent } from './quizzes/edit-quiz/edit-quiz.component';
import {ShowQuizComponent} from './quizzes/show-quiz/show-quiz.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderUserComponent,
    ThemeListComponent,
    ThemeFormComponent,
    ThemeComponent,
    QuestionListComponent,
    QuestionFormComponent,
    QuestionComponent,
    QuizListComponent,
    QuizFormComponent,
    QuizComponent,
    EditQuizComponent,
    ShowQuizComponent,
    ShowQuestionComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

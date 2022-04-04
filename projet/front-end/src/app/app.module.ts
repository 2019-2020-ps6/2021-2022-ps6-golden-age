import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import {HeaderUserComponent} from './header/user/header-user.component';

import { ThemeListComponent } from './themes/theme-list/theme-list.component';
import { ThemeFormComponent } from './themes/theme-form/theme-form.component';
import { ThemeComponent } from './themes/theme/theme.component';

import { QuestionListComponent } from './questions/question-list/question-list.component';
import { QuestionFormComponent } from './questions/question-form/question-form.component';
import { QuestionComponent } from './questions/question/question.component';

import { QuizListComponent } from './quizzes/quiz-list/quiz-list.component';
import { QuizFormComponent } from './quizzes/quiz-form/quiz-form.component';
import { QuizComponent } from './quizzes/quiz/quiz.component';
import { EditQuizComponent } from './quizzes/edit-quiz/edit-quiz.component';

import { HelpPageUserComponent } from './help/user/help-page-user.component';
import { AccueilUserComponent } from './accueil/user/accueilUser.component';
import {AccueilProComponent} from './accueil/pro/accueil-pro.component';
import { ShowQuizComponent } from './quizzes/show-quiz/show-quiz.component';
import {MesQuizComponent} from './quizzes/mes-quiz/mes-quiz.component';

import { LoginComponent } from './login/login.component';
import {UserComponent} from './users/user/user.component';
import {UserFormComponent} from './users/user-form/user-form.component';
import {UserListComponent} from './users/user-list/user-list.component';
import {HeaderProComponent} from './header/pro/header-pro.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderUserComponent,
    HeaderProComponent,
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
    HelpPageUserComponent,
    AccueilUserComponent,
    AccueilProComponent,
    ShowQuizComponent,
    LoginComponent,
    UserComponent,
    UserFormComponent,
    UserListComponent,
    MesQuizComponent,
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

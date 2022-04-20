import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { HeaderUserComponent } from './header/user/header-user.component';

import { ThemeListUserComponent } from './themes/theme-list/user/theme-list-user.component';
import { ThemeFormComponent } from './themes/theme-form/theme-form.component';
import { ThemeComponent } from './themes/theme/user/theme.component';
import { ThemeListProComponent } from './themes/theme-list/pro/theme-list-pro.component';
import { ThemeProComponent } from './themes/theme/pro/theme-pro.component';

import { QuestionFormComponent } from './questions/question-form/question-form.component';
import { QuestionComponent } from './questions/question/question.component';
import { ShowQuestionComponent } from './questions/show-question/show-question.component';

import { QuizListComponent } from './quizzes/quiz-list/quiz-list.component';
import { QuizFormComponent } from './quizzes/quiz-form/quiz-form.component';
import { QuizUserComponent } from './quizzes/quiz/user/quiz-user.component';
import { EditQuizComponent } from './quizzes/edit-quiz/edit-quiz.component';
import { ShowQuizComponent } from './quizzes/show-quiz/show-quiz.component';
import { MesQuizComponent } from './quizzes/mes-quiz/mes-quiz.component';
import { QuizProComponent } from './quizzes/quiz/pro/quiz-pro.component';

import { QuizPlayedComponent } from './quizzes-played/quiz-played/quiz-played.component';
import { QuizPlayedListComponent } from './quizzes-played/quiz-played-list/quiz-played-list.component';

import { HelpPageProComponent } from './help/pro/help-page-pro.component';
import { HelpPageUserComponent } from './help/user/help-page-user.component';

import { AccueilUserComponent } from './accueil/user/accueilUser.component';

import { ResultsQuizComponent } from './quizzes/results-quiz/results-quiz.component';

import { LoginComponent } from './account/login/login.component';

import { UserComponent } from './users/user/user.component';
import { UserFormComponent } from './users/user-form/user-form.component';
import { UserListComponent } from './users/user-list/user-list.component';

import { HeaderProComponent } from './header/pro/header-pro.component';
import { FooterUserComponent } from './footer/user/footerUser.component';
import { FooterProComponent } from './footer/pro/footerPro.component';

import { TextToSpeechComponent } from './textToSpeech/text-to-speech.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    HeaderUserComponent,
    HeaderProComponent,
    FooterUserComponent,
    FooterProComponent,
    ThemeListUserComponent,
    ThemeListProComponent,
    ThemeFormComponent,
    ThemeComponent,
    ThemeProComponent,
    QuestionFormComponent,
    QuestionComponent,
    QuizListComponent,
    QuizFormComponent,
    QuizUserComponent,
    QuizProComponent,
    QuizPlayedComponent,
    QuizPlayedListComponent,
    ResultsQuizComponent,
    EditQuizComponent,
    ShowQuizComponent,
    ShowQuestionComponent,
    AccueilUserComponent,
    HelpPageProComponent,
    HelpPageUserComponent,
    ShowQuizComponent,
    TextToSpeechComponent,
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
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

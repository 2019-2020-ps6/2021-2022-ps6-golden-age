import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelpPageUserComponent } from './help/user/help-page-user.component';
import { HelpPageProComponent } from './help/pro/help-page-pro.component';
import { AccueilUserComponent } from './accueil/user/accueilUser.component';
import { ThemeListUserComponent } from './themes/theme-list/user/theme-list-user.component';
import {QuizListComponent} from './quizzes/quiz-list/quiz-list.component';
import {ShowQuizComponent} from './quizzes/show-quiz/show-quiz.component';
import {ShowQuestionComponent} from './questions/show-question/show-question.component';
import { LoginComponent } from './account/login/login.component';
import { TextToSpeechComponent } from './textToSpeech/text-to-speech.component';
import {MesQuizComponent} from './quizzes/mes-quiz/mes-quiz.component';
import {QuizFormComponent} from './quizzes/quiz-form/quiz-form.component';
import {ThemeFormComponent} from './themes/theme-form/theme-form.component';
import {EditQuizComponent} from './quizzes/edit-quiz/edit-quiz.component';
import {ResultsQuizComponent} from './quizzes/results-quiz/results-quiz.component';
import {QuizPlayedListComponent} from './quizzes-played/quiz-played-list/quiz-played-list.component';


const routes: Routes = [
  {path: 'theme-list', component : ThemeListUserComponent},
  {path: 'helpUser', component: HelpPageUserComponent},
  {path: 'helpPro', component: HelpPageProComponent},
  {path: 'theme/:id', component: QuizListComponent},
  {path: 'accueilUser', component: AccueilUserComponent},
  {path: 'quiz/:id', component: ShowQuizComponent},
  {path: 'quiz/:id/questions/:questionId', component: ShowQuestionComponent},
  {path: 'login', component: LoginComponent},
  {path: 'mes-quiz', component: MesQuizComponent},
  {path: 'ajouter-quiz', component: QuizFormComponent},
  {path: 'resultats', component: ResultsQuizComponent},
  {path: 'ajouter-theme', component: ThemeFormComponent},
  {path: 'show-quiz', component: ShowQuizComponent},
  {path: 'login', component: LoginComponent},
  {path: 'textToSpeech', component : TextToSpeechComponent},
  {path: 'edit-quiz/:quizId/question/:questionId', component: EditQuizComponent},
  {path: 'quiz-played', component: QuizPlayedListComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}

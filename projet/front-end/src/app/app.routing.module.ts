import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { helpPageProComponent } from './help/pro/helpPagePro.component';
import { helpPageUserComponent } from './help/user/helpPageUser.component';
import { AccueilUserComponent } from './accueil/user/accueilUser.component';
import {QuizListComponent} from './quizzes/quiz-list/quiz-list.component';
import {ShowQuizComponent} from './quizzes/show-quiz/show-quiz.component';

const routes: Routes = [
    {path: 'helpPro', component: helpPageProComponent},
    {path: 'helpUser', component: helpPageUserComponent},
    {path: 'accueilUser', component: AccueilUserComponent},
    {path: 'quiz-list', component: QuizListComponent},
  {path: 'show-quiz', component: ShowQuizComponent},
    /*{path: 'edit-quiz/:id', component: EditQuizComponent},
    { path: '', redirectTo: '/quiz-list', pathMatch: 'full' },*/
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelpPageUserComponent } from './help/user/help-page-user.component';
import { AccueilUserComponent } from './accueil/user/accueilUser.component';
import { ThemeListUserComponent } from './themes/theme-list/user/theme-list-user.component';
import {QuizListComponent} from './quizzes/quiz-list/quiz-list.component';
import {QuestionListComponent} from './questions/question-list/question-list.component';
import {ShowQuizComponent} from './quizzes/show-quiz/show-quiz.component';
import { LoginComponent } from './login/login.component';
import {AccueilProComponent} from './accueil/pro/accueil-pro.component';
import {MesQuizComponent} from './quizzes/mes-quiz/mes-quiz.component';
import {QuizFormComponent} from './quizzes/quiz-form/quiz-form.component';
import {ThemeFormComponent} from './themes/theme-form/theme-form.component';


const routes: Routes = [
    {path: 'theme-list', component : ThemeListUserComponent},
    {path: 'helpUser', component: HelpPageUserComponent},
    {path: 'theme/:themeName', component: QuizListComponent},
    {path: 'accueilUser', component: AccueilUserComponent},
    {path: 'accueilPro', component: AccueilProComponent},
    {path: 'quiz-list', component: QuizListComponent},
    {path: 'question-list/:id', component: QuestionListComponent},
    {path: 'show-quiz', component: ShowQuizComponent},
    {path: 'login', component: LoginComponent},
    {path: 'mes-quiz', component: MesQuizComponent},
    {path: 'ajouter-quiz', component: QuizFormComponent},
    {path: 'ajouter-theme', component: ThemeFormComponent},
    // {path: 'edit-quiz/:id', component: EditQuizComponent},
    {path: '', redirectTo: '/login', pathMatch: 'full'},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}

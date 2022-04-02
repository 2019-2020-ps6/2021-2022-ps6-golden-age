import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelpPageUserComponent } from './help/user/help-page-user.component';
import { AccueilUserComponent } from './accueil/user/accueilUser.component';
import { ThemeListComponent } from './themes/theme-list/theme-list.component';
import {QuizListComponent} from './quizzes/quiz-list/quiz-list.component';
import {QuestionListComponent} from './questions/question-list/question-list.component';
import {ShowQuizComponent} from './quizzes/show-quiz/show-quiz.component';
import {ShowQuestionComponent} from "./questions/show-question/show-question.component";


const routes: Routes = [
    {path: 'theme-list', component : ThemeListComponent},
    {path: 'helpUser', component: HelpPageUserComponent},
    {path: 'theme/:themeName', component: QuizListComponent},
    {path: 'accueilUser', component: AccueilUserComponent},
    {path: 'quiz-list', component: QuizListComponent},
    {path: 'question-list/:id', component: QuestionListComponent},
    {path: 'show-quiz/:id', component: ShowQuizComponent},
    {path: 'show-question/:id', component: ShowQuestionComponent},
    /*{path: 'edit-quiz/:id', component: EditQuizComponent},
    { path: '', redirectTo: '/quiz-list', pathMatch: 'full' },*/
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SelectionQuizComponent } from './quizzes/selectionnerUnQuiz.component';


const routes: Routes = [
    {path: 'quizzes', component : SelectionQuizComponent},
    //{path: 'quiz-list', component: QuizListComponent},
    //{path: 'edit-quiz/:id', component: EditQuizComponent},
    //{ path: '', redirectTo: '/quiz-list', pathMatch: 'full' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}

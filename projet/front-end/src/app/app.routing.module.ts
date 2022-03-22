import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {path: '/quizzes', },
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

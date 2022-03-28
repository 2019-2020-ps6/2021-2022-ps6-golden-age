import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ThemeListComponent } from './themes/theme-list/theme-list.component';


const routes: Routes = [
    {path: 'themes', component : ThemeListComponent},
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

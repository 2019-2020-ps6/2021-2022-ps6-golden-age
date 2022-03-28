import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { helpPageProComponent } from './help/pro/helpPagePro.component';
import { helpPageUserComponent } from './help/user/helpPageUser.component';
import { AccueilUserComponent } from './accueil/user/accueilUser.component';
import { ThemeListComponent } from './themes/theme-list/theme-list.component';


const routes: Routes = [
    {path: 'theme-list', component : ThemeListComponent},
    //{path: 'quiz-list', component: QuizListComponent},
    //{path: 'edit-quiz/:id', component: EditQuizComponent},
    //{ path: '', redirectTo: '/quiz-list', pathMatch: 'full' },
    {path: 'helpPro', component: helpPageProComponent},
    {path: 'helpUser', component: helpPageUserComponent},
    {path: 'accueilUser', component: AccueilUserComponent},

    /*
    {path: 'quiz-list', component: QuizListComponent},
    {path: 'edit-quiz/:id', component: EditQuizComponent},
    { path: '', redirectTo: '/quiz-list', pathMatch: 'full' },*/
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}

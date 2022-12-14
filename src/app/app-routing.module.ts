import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FaculdadeComponent } from './faculdade/faculdade.component';

import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { AuthGuard } from './_helpers';

const routes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'faculdade', component: FaculdadeComponent, canActivate: [AuthGuard], data:{
        role: 'faculdade'
    } },
    { path: 'login', component: LoginComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

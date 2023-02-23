import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastrarProfessorComponent } from './faculdade/cadastrar-professor/cadastrar-professor.component';
import { FaculdadeComponent } from './faculdade/faculdade.component';
import { ListarProfessorComponent } from './faculdade/listar-professor/listar-professor.component';

import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './_helpers';

const routes: Routes = [
    { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'cadastrar-docente', component: CadastrarProfessorComponent, canActivate: [AuthGuard], data:{
        role: 'faculdade'
    } },
    { path: 'listar-docentes', component: ListarProfessorComponent, canActivate: [AuthGuard], data:{
        role: 'faculdade'
    } },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: 'home' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

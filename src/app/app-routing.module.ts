import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastrarProfessorComponent } from './faculdade/cadastrar-professor/cadastrar-professor.component';
import { FaculdadeComponent } from './faculdade/faculdade.component';
import { ListarProfessorComponent } from './faculdade/listar-professor/listar-professor.component';

import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './_helpers';
import { ScannComponent } from './scanner/scann/scann.component';
import { CriarEventoComponent } from './evento/criar-evento/criar-evento.component';
import { ValidarQrCodeComponent } from './evento/validar-qr-code/validar-qr-code.component';
import { QrcodeComponent } from './aluno/qrcode/qrcode.component';
import { CertificadosComponent } from './aluno/certificados/certificados.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'cadastrar-docente', component: CadastrarProfessorComponent, canActivate: [AuthGuard], data:{
        role: 'faculdade'
    } },
    { path: 'listar-docentes', component: ListarProfessorComponent, canActivate: [AuthGuard], data:{
        role: 'faculdade'
    } },
    { path: 'criar-evento', component: CriarEventoComponent, canActivate: [AuthGuard], data:{
        role: 'professor'
    } },
    { path: 'ler-qrcode/:id', component: ScannComponent, canActivate: [AuthGuard], data:{
        role: 'professor',
        routeEspecification: 'ler-qrcode'
    } },
    { path: 'qrcode', component: QrcodeComponent, canActivate: [AuthGuard], data:{
        role: 'aluno',
    } },
    { path: 'certificados', component: CertificadosComponent, canActivate: [AuthGuard], data:{
        role: 'aluno',
    } },
    { path: 'validar-qrcode', component: ValidarQrCodeComponent, canActivate: [AuthGuard], data:{
        role: 'professor',
        routeEspecification: 'ler-qrcode'
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

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { HomeComponent } from './home';
import { LoginComponent } from './login';;
import { FaculdadeComponent } from './faculdade/faculdade.component';;
import { CadastrarProfessorComponent } from './faculdade/cadastrar-professor/cadastrar-professor.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RegisterComponent } from './register/register.component';
import { ListarProfessorComponent } from './faculdade/listar-professor/listar-professor.component'
import { NgxScannerQrcodeModule } from 'ngx-scanner-qrcode';;
import { ScannComponent } from './scanner/scann/scann.component';
import { CriarEventoComponent } from './evento/criar-evento/criar-evento.component'
;
import { ValidarQrCodeComponent } from './evento/validar-qr-code/validar-qr-code.component'
import { QRCodeModule } from 'angularx-qrcode';;
import { QrcodeComponent } from './aluno/qrcode/qrcode.component'
@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        AppRoutingModule,
        NgxScannerQrcodeModule,
        FormsModule,
        BrowserModule,
        QRCodeModule
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        LoginComponent,
        FaculdadeComponent,
        CadastrarProfessorComponent,
        SidebarComponent,
        RegisterComponent,
        ListarProfessorComponent,
        ScannComponent,
        CriarEventoComponent,
        ValidarQrCodeComponent,
        QrcodeComponent
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
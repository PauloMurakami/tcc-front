import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '@environments/environment';
export interface BodyCreateProfessor {
    email: string
    nome: string
    senha: string
}
@Injectable({ providedIn: 'root' })
export class ProfessorService {
    constructor(private http: HttpClient) { }
    createProfessor(body: BodyCreateProfessor) {
        return this.http.post<any>(`${environment.apiUrl}/register-teacher`, body)
    }
    getAllProfessor() {
        return this.http.get<any[]>(`${environment.apiUrl}/list-teacher`);
    }
    // {

    // }
}
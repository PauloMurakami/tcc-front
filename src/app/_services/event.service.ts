import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '@environments/environment';

@Injectable({ providedIn: 'root' })
export class EventServices {
    constructor(private http: HttpClient) { }

    getAllOpen() {
        return this.http.get<any[]>(`${environment.apiUrl}/find-events-open`);
    }

    createEvent(nome: string, quantidadeDeHoras: number, quantidadeDeVagas: number, nomePalestrante: string, descricao:string, data: string) {
        return this.http.post<any>(`${environment.apiUrl}/register-event`, { nome, quantidadeDeHoras, quantidadeDeVagas, nomePalestrante, descricao, data })
    }
}
import { Component } from '@angular/core';
import { first } from 'rxjs/operators';

import { User } from '@app/_models';
import { EventServices } from '@app/_services';

@Component({
    templateUrl: 'home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent {
    loading = false;
    eventos: any[];
    eventosCadastrados: any[];
    eventoSelecionado: any = {
        nome: "",
        nomePalestrante: "",
        quantidadeDeVagas: 0,
        quantidadeDeHoras: 0,
        status: "",
        data: ""
    };
    eventoSelecionadoModal = false;
    constructor(private eventosService: EventServices) { }

    ngOnInit() {
        this.eventosService.getAllOpenNotJoin().subscribe(eventos => {
            this.loading = false;
            this.eventos = eventos;
        });
        this.eventosService.getAllOpenJoin().subscribe(eventos => {
            this.loading = false;
            this.eventosCadastrados = eventos;
        });
    }
    informacoes(evento: any) {
        this.eventoSelecionado = evento
        console.log(this.eventoSelecionado.nome)
        this.eventoSelecionadoModal = true;
        document.getElementById("openModalButton").click();
    }
    entrar(id: string) {
        console.log(id)
        this.eventosService.joinEvent(id).subscribe(() => {
            console.log("cadastrado!");
        })
    }
}
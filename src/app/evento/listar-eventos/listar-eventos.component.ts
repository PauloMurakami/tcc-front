import { Component, OnInit } from '@angular/core';
import { User } from '@app/_models';
import { AuthenticationService, EventServices } from '@app/_services';

@Component({
  selector: 'app-listar-eventos',
  templateUrl: './listar-eventos.component.html',
  styleUrls: ['./listar-eventos.component.less']
})
export class ListarEventosComponent implements OnInit {


  currentUser: User;
  nomeUsuario: string;
  loading = false;
  eventos: any[];
  eventoSelecionado: any = {
      nome: "",
      nomePalestrante: "",
      quantidadeDeVagas: 0,
      quantidadeDeHoras: 0,
      status: "",
      data: "",
  };
  eventoSelecionadoModal = false;
  constructor(private eventosService: EventServices,
      private authenticationService: AuthenticationService) {
      this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
      this.nomeUsuario = this.currentUser.userExists.nome;
  }

  ngOnInit() {
      this.eventosService.getAll().subscribe(eventos => {
          this.loading = false;
          this.eventos = eventos;
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
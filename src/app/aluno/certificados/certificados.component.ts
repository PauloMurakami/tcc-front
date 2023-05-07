import { Component, OnInit } from '@angular/core';
import { EventServices } from '@app/_services';

@Component({
  selector: 'app-certificados',
  templateUrl: './certificados.component.html',
  styleUrls: ['./certificados.component.less']
})
export class CertificadosComponent implements OnInit {
  eventos: any[];
  constructor(private eventosService: EventServices) { }

  ngOnInit(): void {
    this.eventosService.findCertificados().subscribe(eventos => {
      this.eventos = eventos;
  });
  }

}

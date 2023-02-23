import { Component, OnInit } from '@angular/core';
import { ProfessorService } from '@app/_services';

@Component({
  selector: 'app-listar-professor',
  templateUrl: './listar-professor.component.html',
  styleUrls: ['./listar-professor.component.less']
})
export class ListarProfessorComponent implements OnInit {

  constructor(private professorService: ProfessorService) { }

  loading = false;
  professores: any[];

  ngOnInit(): void {
    this.professorService.getAllProfessor().subscribe(professores => {
      this.loading = false;
      this.professores = professores;
    });
  }

}

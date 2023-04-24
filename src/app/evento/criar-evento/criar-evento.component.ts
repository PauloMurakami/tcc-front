import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EventServices, ProfessorService } from '@app/_services';

@Component({
  selector: 'app-criar-evento',
  templateUrl: './criar-evento.component.html',
  styleUrls: ['./criar-evento.component.css']
})
export class CriarEventoComponent implements OnInit {
  loading = false;
  submitted = false;
  error = false;
  errorMessage = "";
  cadastrarEventoForm: FormGroup;
  passwordInvalida = false;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private eventoService: EventServices) { }

  ngOnInit(): void {
    this.cadastrarEventoForm = this.formBuilder.group({
      nome: ['', Validators.required],
      quantidadeDeHoras: ['', Validators.required],
      quantidadeDeVagas: ['', Validators.required],
      nomePalestrante: ['', Validators.required],
      descricao: ['', Validators.required],
      data: ['', Validators.required],
      horario: ['', Validators.required]
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.cadastrarEventoForm.invalid) {
      return;
    }
    // console.log("data", this.f.data.value)
    // console.log("horario", this.f.horario.value)
    // console.log(JSON.stringify(new Date(this.f.data.value + " " + this.f.horario.value)))
    let data = JSON.stringify(new Date(this.f.data.value + " " + this.f.horario.value))

    this.eventoService.createEvent(
      this.f.nome.value,
      this.f.quantidadeDeHoras.value,
      this.f.quantidadeDeVagas.value,
      this.f.nomePalestrante.value,
      this.f.descricao.value,
      data
    ).subscribe(() => {
      document.getElementById("openModalButton").click();
      this.limparFormulario();
    }, (err) => {
      console.log(err)
      if (err == "OK") {
        document.getElementById("openModalButton").click();
        this.limparFormulario();
        return;
      }
      this.error = true
      setTimeout(() => {
        this.limparFormulario();
        this.error = false
      }, 2000)
    })
  }
  get f() { return this.cadastrarEventoForm.controls; }

  private limparFormulario() {
    this.submitted = false;
    this.cadastrarEventoForm.reset();
  }
}

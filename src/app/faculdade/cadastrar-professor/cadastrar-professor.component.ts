import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfessorService } from '@app/_services';

@Component({
  selector: 'app-cadastrar-professor',
  templateUrl: './cadastrar-professor.component.html',
  styleUrls: ['./cadastrar-professor.component.less']
})
export class CadastrarProfessorComponent implements OnInit {
  loading = false;
  submitted = false;
  error = false;
  errorMessage = "";
  cadastrarProfessorForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private professorService: ProfessorService
  ) {

  }

  ngOnInit(): void {
    this.cadastrarProfessorForm = this.formBuilder.group({
      email: ['', Validators.required],
      nome: ['', Validators.required],
      senha: ['', Validators.required]
    });
  }
  get f() { return this.cadastrarProfessorForm.controls; }

  onSubmit() {
    console.log('submit')
    this.submitted = true;
    if (this.cadastrarProfessorForm.invalid) {
      return;
    }
    this.professorService.createProfessor({
      email: this.f.email.value,
      nome: this.f.nome.value,
      senha: this.f.senha.value
    }).subscribe(()=>{
      document.getElementById("openModalButton").click();
      this.limparFormulario();
    }, (err)=>{
      if(err == "Conflict"){
        this.errorMessage = "Email ja utilizado!"
      }else{
        this.errorMessage = "Algo deu errado!"
      }
      this.error = true
      setTimeout(()=>{
        this.limparFormulario();
        this.error = false
      }, 2000)

    })

    console.log()
  }

  private limparFormulario() {
    this.submitted = false;
    this.cadastrarProfessorForm.reset();
  }
}

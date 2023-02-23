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
  passwordInvalida = false;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private professorService: ProfessorService
  ) {

  }

  ngOnInit(): void {
    this.cadastrarProfessorForm = this.formBuilder.group({
      nome: ['', Validators.required],
      sobrenome: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    });
  }
  get f() { return this.cadastrarProfessorForm.controls; }

  onSubmit() {
    if(this.f.password.value != this.f.confirmPassword.value){
      this.f.password.reset()
      this.f.confirmPassword.reset()
      this.passwordInvalida = true;
      return;
    }
    console.log('submit')
    this.submitted = true;
    if (this.cadastrarProfessorForm.invalid) {
      return;
    }
    this.professorService.createProfessor({
      email: this.f.email.value,
      nome: this.f.nome.value + " " + this.f.sobrenome.value,
      senha: this.f.password.value
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

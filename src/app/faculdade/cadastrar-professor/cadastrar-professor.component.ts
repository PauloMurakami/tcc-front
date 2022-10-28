import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cadastrar-professor',
  templateUrl: './cadastrar-professor.component.html',
  styleUrls: ['./cadastrar-professor.component.less']
})
export class CadastrarProfessorComponent implements OnInit {
  cadastrarProfessorForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
) { 
    
}

  ngOnInit(): void {
    this.cadastrarProfessorForm = this.formBuilder.group({
      email: ['', Validators.required]
  });
  }
  get f() { return this.cadastrarProfessorForm.controls; }

  onSubmit() {
    window.alert(this.f.email.value);
    console.log()
  }
}

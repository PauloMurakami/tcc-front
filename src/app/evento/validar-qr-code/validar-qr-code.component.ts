import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EventServices } from '@app/_services';

@Component({
  selector: 'app-validar-qr-code',
  templateUrl: './validar-qr-code.component.html',
  styleUrls: ['./validar-qr-code.component.css']
})
export class ValidarQrCodeComponent implements OnInit {
  userId;
  loading = false;
  submitted = false;
  error = false;
  errorMessage = "";
  EventForm: FormGroup;
  passwordInvalida = false;
  eventos:[];

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private eventoService: EventServices
  ) {

  }

  ngOnInit(): void {
    this.EventForm = this.formBuilder.group({
      evento: ['', Validators.required]
    });
    this.eventoService.getAllJoindedOpen().subscribe((res: any)=> {
      console.log(res.eventos)
      this.loading = false;
      this.eventos = res.eventos;
    },(err)=>{
      console.log(err)
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.EventForm.invalid) {
      return;
    }
    console.log(`/ler-qrcode/${this.f.evento.value}`)
    this.router.navigate([`/ler-qrcode/${this.f.evento.value}`])
  
  }
  get f() { return this.EventForm.controls; }

  private limparFormulario() {
    this.submitted = false;
    this.EventForm.reset();
  }
}

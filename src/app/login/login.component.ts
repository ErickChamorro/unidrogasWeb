import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  submitted = false;
  respuesta: any;
  public respuesta_servidor: boolean;
  disabled: boolean;
  data: any;

  constructor(
    private formBuilder: FormBuilder,
    public http: HttpClient,
    public location: Location,
    public router: Router,
    route: ActivatedRoute
    ) {
      this.respuesta_servidor = true;

      this.loginForm = this.formBuilder.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]]
      });
    }

  ngOnInit() {
    this.disabled = true;
  }

  get form() {
    return this.loginForm.controls;
  }

  iniciarSesion() {
    this.submitted = true;

    // si formulario es invalido
    if (this.loginForm.invalid) {
      alert('aqui falta algo...');
      return;
    }

    this.http.post('https://reqres.in/api/login', JSON.stringify(this.loginForm.value),
    {
      headers: new HttpHeaders({
        Authorization: 'Access',
        'Content-Type': 'application/json'
      })
    }).subscribe(data => {
      console.log('POST request is successfull', data);
      this.router.navigate(['/main']);
      this.respuesta = data;
      this.respuesta_servidor = false;
    },
    error => {
      console.log('Error', error);
    });
  }

}

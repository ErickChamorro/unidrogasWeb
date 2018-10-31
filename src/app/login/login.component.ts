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
        username: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]]
      });
    }

  ngOnInit() {
    // para desacivar el boton al cargar la pagina
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

    this.http.post('http://192.168.1.62/supervisores_api/public/api/login', JSON.stringify(this.loginForm.value),
    {
      headers: new HttpHeaders({
        Authorization: 'Access',
        'Content-Type': 'application/json'
      })
    }).subscribe(data => {
      const token = data['access_token'];
      localStorage.setItem('token', token);
      this.router.navigate(['/main']);
      // this.http
      // .get('http://192.168.1.62/supervisores_api/public/api/posts', {
      //   headers: new HttpHeaders({
      //     Accept: 'application/json',
      //     Authorization: 'Bearer' + ' ' + localStorage.getItem('token')
      //   })
      // })
      // .subscribe(textos => console.log(textos));
      console.log('POST request is successfull', data);
      console.log('status: ', status);
      this.respuesta = data;
      this.respuesta_servidor = false;
    },
    error => {
      if (error.status === 401) {
        alert('error 401: unuthorized');
        localStorage.clear();
        console.log(error);
      }
    });
  }

}

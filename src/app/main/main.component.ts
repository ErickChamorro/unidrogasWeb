import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import swal from 'sweetalert2';

declare var $: any;

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  api_url = 'http://192.168.1.64/supervisores_api/public/api/HomeCoordinador';
  data: any;
  items: any;
  constructor(
    private formBuilder: FormBuilder,
    public http: HttpClient,
    public location: Location,
    public router: Router,
    route: ActivatedRoute) { }

  ngOnInit() {
    // BOTON TOGGLE PARA EL SIDEBAR
      $('#sidebarCollapse').on('click', function () {
          $('#sidebar').toggleClass('active');
      });
    // ------------------------------------------------

    this.lista_de_zonas_y_region();
  }


  lista_de_zonas_y_region() {
    // OBTENER EL ENLACE Y SUSCRIBIRSE
    this.http.get(this.api_url, {
      headers: new HttpHeaders({
        Accept: 'application/json',
        Authorization: 'Bearer' + ' ' + localStorage.getItem('token')
      })
    })
    .subscribe(data => {
      this.data = data['/Zonas'];
      console.log(data['Zonas']);
    },
    error => {
      console.log(error);
    });
  }

}

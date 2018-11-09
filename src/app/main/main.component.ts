import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from '@angular/forms';
import swal from 'sweetalert2';
import { Zonas } from '../models/zonas';
import { RegionCoordinador } from '../models/region-coordinador';

declare var $: any;

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  api_url = 'http://192.168.1.64/supervisores_api/public/api/HomeCoordinador';
  zonas: Array<Zonas>;
  region: Array<RegionCoordinador>;
  constructor(
    private formBuilder: FormBuilder,
    public http: HttpClient,
    public location: Location,
    public router: Router,
    route: ActivatedRoute
  ) {}

  ngOnInit() {
    // BOTON TOGGLE PARA EL SIDEBAR
    $('#sidebarCollapse').on('click', function() {
      $('#sidebar').toggleClass('active');
    });
    // ------------------------------------------------

    this.lista_de_zonas_y_region();
  }

  lista_de_zonas_y_region() {
    // OBTENER EL ENLACE Y SUSCRIBIRSE
    this.http
      .get(this.api_url, {
        headers: new HttpHeaders({
          Accept: 'application/json',
          Authorization: 'Bearer' + ' ' + localStorage.getItem('token')
        })
      })
      .subscribe(
        data => {
          this.zonas = data['Zonas'];
          this.region = data['region'];
          console.log(this.zonas);
          console.log(this.region);
        },
        error => {
          console.log(error);
        }
      );
  }

  mandame_a_zona(id_zona: number, zona) {
    this.router.navigate(['/zona', id_zona]);
    console.log(id_zona);
    this.http
      .get(
        `http://192.168.1.64/supervisores_api/public/api/sucursalesZona/${id_zona}`,
        {
          headers: new HttpHeaders({
            Accept: 'application/json',
            Authorization: 'Bearer' + ' ' + localStorage.getItem('token')
          })
        }
      )
      .subscribe(texto => {
        console.log(zona);
        console.log(texto);
      });
  }

  cerrarSesion() {
    this.router.navigate(['']);
    localStorage.clear();
  }
}

// export interface GrupoZonas {
//   descripcion_zona?: string;
//   id_usuario_supervisor?: number;
//   id_zona?: number;
//   supervisor?: string;
// }

// export interface RegionCoordinador {
//   apellido?: string;
//   id_cordinador?: number;
//   id_region?: number;
//   nombre?: string;
//   region?: string;
// }

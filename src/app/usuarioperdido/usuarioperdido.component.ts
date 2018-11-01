import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuarioperdido',
  templateUrl: './usuarioperdido.component.html',
  styleUrls: ['./usuarioperdido.component.css']
})
export class UsuarioperdidoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  cerrarSesion() {
    localStorage.clear();
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-zona',
  templateUrl: './zona.component.html',
  styleUrls: ['./zona.component.css']
})
export class ZonaComponent implements OnInit {
  id_zona: any;
  zonas: any;
  constructor(private route: ActivatedRoute, private http: HttpClient) {
    route.params.subscribe(params => {
      this.http
        .get(
          `http://192.168.1.64/supervisores_api/public/api/sucursalesZona/` +
            params['id'],
          {
            headers: new HttpHeaders({
              Accept: 'application/json',
              Authorization: 'Bearer' + ' ' + localStorage.getItem('token')
            })
          }
        )
        .subscribe(texto => {
          this.zonas = texto['sucursal'];
          console.log(this.zonas);
          // console.log(texto);
        });
      console.log(params['id']);
    });
  }

  ngOnInit() {}
}

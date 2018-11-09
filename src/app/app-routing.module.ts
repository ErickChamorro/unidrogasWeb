import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { MainComponent } from './main/main.component';
import { UsuarioperdidoComponent } from './usuarioperdido/usuarioperdido.component';
import { ZonaComponent } from './paginas/zona/zona.component';

const APP_ROUTES: Routes = [
  // PAGINAS PRINCIPALES
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'main', component: MainComponent },
  { path: 'lost_user', component: UsuarioperdidoComponent },

  // MAS PAGINAS
  // { path: 'zona', component: ZonaComponent },
  { path: 'zona/:id', component: ZonaComponent },

  // en caso de que se quiera acceder  un link que no exista te mande al link principal que es el login
  // como por ejemplo si quieres entrar a main sin haber iniciado sesion
  { path: '**', pathMatch: 'full', redirectTo: '' }
];

export const AppRoutingModule = RouterModule.forRoot(APP_ROUTES);

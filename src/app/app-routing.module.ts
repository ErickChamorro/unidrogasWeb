import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { MainComponent } from './main/main.component';


const APP_ROUTES: Routes = [
    {path: 'login', component: LoginComponent },
    {path: 'registro', component: RegistroComponent },
    {path: 'main', component: MainComponent }
];

export const AppRoutingModule = RouterModule.forRoot(APP_ROUTES);

import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { NoticiaDetalleComponent } from './noticia-detalle/noticia-detalle.component';

export const routes: Routes = [
  { path: '', component: LoginComponent }, 
  { path: 'home', component: HomeComponent },
  { path: 'noticia/:id', component: NoticiaDetalleComponent },
];

import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Sobre } from './sobre/sobre';
import { Experiencia } from './experiencia/experiencia';
import { Contato } from './contato/contato';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'sobre', component: Sobre },
  { path: 'experiencia', component: Experiencia },
  { path: 'contato', component: Contato },
];

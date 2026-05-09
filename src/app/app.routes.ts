import { Routes } from '@angular/router';
import { Developers } from './developers/developers';
import { Home } from './home/home';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'developers', component: Developers },
  { path: '**', redirectTo: '' },
];

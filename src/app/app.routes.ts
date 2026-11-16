import { Routes } from '@angular/router';
import { Home } from './pages/home';
import { UnderConstruction } from './pages/under-construction';

export const routes: Routes = [
  { path: '', component: Home },
  { path: '**', component: UnderConstruction }, // any route without its own page
];

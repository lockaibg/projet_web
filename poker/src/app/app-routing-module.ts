import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { App } from './app';
import { EquityCalculator } from './equity-calculator/equity-calculator';
import { Accueil } from './accueil/accueil';
import { Joueurs } from './joueurs/joueurs';
import { Mains } from './mains/mains';


const routes: Routes = [
  { path: '', redirectTo: '/accueil',pathMatch: 'full' },
  { path: 'accueil', component: Accueil},
  { path: 'equity-calculator', component: EquityCalculator},
  { path: 'joueurs', component: Joueurs},
  { path: 'mains', component: Mains }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { App } from './app';
import { EquityCalculator } from './equity-calculator/equity-calculator';
import { Accueil } from './accueil/accueil';
import { Joueurs } from './joueurs/joueurs';


const routes: Routes = [
  { path: '', component: App },
  { path: 'accueil', component: Accueil},
  { path: 'equity-calculator', component: EquityCalculator},
  { path: 'joueurs', component: Joueurs},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

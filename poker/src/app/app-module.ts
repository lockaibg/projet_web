import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { EquityCalculator } from './equity-calculator/equity-calculator';
import { Joueurs } from './joueurs/joueurs';
import { TesgtPipe } from './tesgt-pipe';
import { Accueil } from './accueil/accueil';
import { Navigation } from './navigation/navigation';
import { Mains } from './mains/mains';
import { Paire } from './differente_mains/paire/paire';
import { Brelan } from './differente_mains/brelan/brelan';
import { DoublePaire } from './differente_mains/double-paire/double-paire';
import { Suite } from './differente_mains/suite/suite';
import { Couleur } from './differente_mains/couleur/couleur';
import { FullHouse } from './differente_mains/full-house/full-house';
import { Carre } from './differente_mains/carre/carre';
import { StraightFlush } from './differente_mains/straight-flush/straight-flush';


@NgModule({
  declarations: [
    App,
    EquityCalculator,
    Joueurs,
    TesgtPipe,
    Accueil,
    Navigation,
    Mains,
    Paire,
    Brelan,
    DoublePaire,
    Suite,
    Couleur,
    FullHouse,
    Carre,
    StraightFlush
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
  ],
  bootstrap: [App]
})
export class AppModule { }

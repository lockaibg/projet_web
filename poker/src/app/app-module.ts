import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Carte } from './model/carte';
import { Main } from './main/main';
import { EquityCalculator } from './equity-calculator/equity-calculator';
import { Joueurs } from './joueurs/joueurs';
import { TesgtPipe } from './tesgt-pipe';
import { Accueil } from './accueil/accueil';
import { Navigation } from './navigation/navigation';

@NgModule({
  declarations: [
    App,
    Main,
    EquityCalculator,
    Joueurs,
    TesgtPipe,
    Accueil,
    Navigation
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

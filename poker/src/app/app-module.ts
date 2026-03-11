import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { EquityCalculator } from './equity-calculator/equity-calculator';
import { Joueurs } from './joueurs/joueurs';
import { TesgtPipe } from './tesgt-pipe';
import { Accueil } from './accueil/accueil';
import { Header } from './header/header';
import { Mains } from './mains/mains';
import { PokerNumberPipe } from './pipes/poker-number-pipe';


@NgModule({
  declarations: [
    App,
    EquityCalculator,
    Joueurs,
    TesgtPipe,
    Accueil,
    Header,
    Mains,
    PokerNumberPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
  ],
  bootstrap: [App]
})
export class AppModule { }

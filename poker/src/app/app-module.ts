import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Carte } from './model/carte';
import { Main } from './main/main';
import { EquityCalculator } from './equity-calculator/equity-calculator';
import { Header } from './header/header';
import { Body } from './body/body';
import { Joueurs } from './joueurs/joueurs';

@NgModule({
  declarations: [
    App,
    Main,
    EquityCalculator,
    Header,
    Body,
    Joueurs
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

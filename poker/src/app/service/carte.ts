import { Injectable } from '@angular/core';
import { Carte } from '../model/carte';

@Injectable({
  providedIn: 'root',
})
export class CarteService {

  private cartes: Carte[] = [];

  constructor() {
    const couleurs = ["coeur", "carreau", "pique", "trefle"];

    for (let couleur of couleurs) {
      for (let valeur = 1; valeur <= 13; valeur++) {
        this.cartes.push({
          valeur: valeur,
          couleur: couleur
        });
      }
    }
  }

  getCarte(): Carte[] {
    return this.cartes;
  }

}

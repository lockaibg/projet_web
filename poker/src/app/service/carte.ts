
import { Injectable } from '@angular/core';
import { Carte } from '../model/carte';


@Injectable({
  providedIn: 'root',
})
export class CarteService {

  private cartes: Carte[] = [];

  constructor() {
    const couleurs = ["hearts", "spades", "diamonds", "clubs"];

    for (let couleur of couleurs) {
      for (let valeur = 1; valeur <= 13; valeur++) {
        this.cartes.push({
          valeur: valeur,
          couleur: couleur,
          img: `/assets/cartes/${valeur}`+"_of_"+`${couleur}.png`
        });
      }
    }
  }


  getCarte(): Carte[] {
    return this.cartes;
  }

  getCarteByValueAndColor(valeur: number, couleur: string): Carte {
    return this.cartes.find(carte => carte.valeur === valeur && carte.couleur === couleur) || this.cartes[0];
  }

}

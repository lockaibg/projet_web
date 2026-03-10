import { Injectable } from '@angular/core';
import { CarteService } from './carte';
import { Main } from '../model/main';

@Injectable({
  providedIn: 'root',
})
export class MainService {

  private carteService: CarteService = new CarteService();
  private mains: Main[] = [];

  constructor() {
    this.mains = [
      { cartes: [this.carteService.getCarteByValueAndColor(1, "coeur"), this.carteService.getCarteByValueAndColor(1, "pique")], nom: "paire" },
      { cartes: [this.carteService.getCarteByValueAndColor(2, "carreau"), this.carteService.getCarteByValueAndColor(2, "trefle"), this.carteService.getCarteByValueAndColor(2, "coeur")], nom: "brelan" },
      { cartes: [this.carteService.getCarteByValueAndColor(3, "coeur"), this.carteService.getCarteByValueAndColor(4, "trefle"), this.carteService.getCarteByValueAndColor(3, "pique"), this.carteService.getCarteByValueAndColor(4, "carreau")], nom: "double-paire" },
      { cartes: [this.carteService.getCarteByValueAndColor(5, "coeur"), this.carteService.getCarteByValueAndColor(6, "trefle"), this.carteService.getCarteByValueAndColor(7, "pique"), this.carteService.getCarteByValueAndColor(8, "carreau"), this.carteService.getCarteByValueAndColor(9, "coeur")], nom: "suite" },
      { cartes: [this.carteService.getCarteByValueAndColor(10, "coeur"), this.carteService.getCarteByValueAndColor(11, "coeur"), this.carteService.getCarteByValueAndColor(2, "coeur"), this.carteService.getCarteByValueAndColor(7, "coeur"), this.carteService.getCarteByValueAndColor(1, "coeur")], nom: "couleur" },
      { cartes: [this.carteService.getCarteByValueAndColor(12, "coeur"), this.carteService.getCarteByValueAndColor(12, "trefle"), this.carteService.getCarteByValueAndColor(12, "pique"), this.carteService.getCarteByValueAndColor(13, "coeur"), this.carteService.getCarteByValueAndColor(13, "trefle")], nom: "full-house" },
      { cartes: [this.carteService.getCarteByValueAndColor(11, "coeur"), this.carteService.getCarteByValueAndColor(11, "trefle"), this.carteService.getCarteByValueAndColor(11, "pique"), this.carteService.getCarteByValueAndColor(11, "carreau")], nom: "carre" },
      { cartes: [this.carteService.getCarteByValueAndColor(9, "coeur"), this.carteService.getCarteByValueAndColor(10, "coeur"), this.carteService.getCarteByValueAndColor(11, "coeur"), this.carteService.getCarteByValueAndColor(12, "coeur"), this.carteService.getCarteByValueAndColor(13, "coeur")], nom: "straight-flush" }
    ]
  }

  getMains(): Main[] {
    return this.mains;
  }

  getMainByName(nom: string): Main | undefined {
    return this.mains.find(main => main.nom === nom);
  }

}

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
      { cartes: [this.carteService.getCarteByValueAndColor(1, "hearts"), this.carteService.getCarteByValueAndColor(1, "spades")], nom: "Paire",description: "Main contenant deux cartes du même rang, peu importe la couleur." },
      { cartes: [this.carteService.getCarteByValueAndColor(1, "hearts"), this.carteService.getCarteByValueAndColor(1, "clubs"), this.carteService.getCarteByValueAndColor(13, "spades"), this.carteService.getCarteByValueAndColor(13, "clubs")], nom: "Double paire", description: "Main contenant deux paires, peu importe la couleur" },
      { cartes: [this.carteService.getCarteByValueAndColor(1, "diamonds"), this.carteService.getCarteByValueAndColor(1, "spades"), this.carteService.getCarteByValueAndColor(1, "hearts")], nom: "Brelan",description: "Main contenant trois cartes du même rang, peu importe la couleur." },
      { cartes: [this.carteService.getCarteByValueAndColor(1, "hearts"), this.carteService.getCarteByValueAndColor(2, "clubs"), this.carteService.getCarteByValueAndColor(3, "spades"), this.carteService.getCarteByValueAndColor(4, "diamonds"), this.carteService.getCarteByValueAndColor(5, "hearts")], nom: "Suite", description: },
      { cartes: [this.carteService.getCarteByValueAndColor(10, "hearts"), this.carteService.getCarteByValueAndColor(11, "hearts"), this.carteService.getCarteByValueAndColor(2, "hearts"), this.carteService.getCarteByValueAndColor(7, "hearts"), this.carteService.getCarteByValueAndColor(1, "hearts")], nom: "Couleur" },
      { cartes: [this.carteService.getCarteByValueAndColor(12, "hearts"), this.carteService.getCarteByValueAndColor(12, "clubs"), this.carteService.getCarteByValueAndColor(12, "spades"), this.carteService.getCarteByValueAndColor(13, "hearts"), this.carteService.getCarteByValueAndColor(13, "clubs")], nom: "Main pleine" },
      { cartes: [this.carteService.getCarteByValueAndColor(11, "hearts"), this.carteService.getCarteByValueAndColor(11, "clubs"), this.carteService.getCarteByValueAndColor(11, "spades"), this.carteService.getCarteByValueAndColor(11, "diamonds")], nom: "Carré" },
      { cartes: [ this.carteService.getCarteByValueAndColor(8, "hearts"),this.carteService.getCarteByValueAndColor(9, "hearts"), this.carteService.getCarteByValueAndColor(10, "hearts"), this.carteService.getCarteByValueAndColor(11, "hearts"), this.carteService.getCarteByValueAndColor(12, "hearts")], nom: "Quinte flush" },
      { cartes: [this.carteService.getCarteByValueAndColor(10, "clubs"), this.carteService.getCarteByValueAndColor(11, "clubs"), this.carteService.getCarteByValueAndColor(12, "clubs"), this.carteService.getCarteByValueAndColor(13, "clubs"),this.carteService.getCarteByValueAndColor(1, "clubs")], nom: "Quinte flush royale" }
    ]
  }

  getMains(): Main[] {
    return this.mains;
  }

  getMainByName(nom: string): Main | undefined {
    return this.mains.find(main => main.nom === nom);
  }

}

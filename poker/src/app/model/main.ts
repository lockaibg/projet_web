import { Carte } from './carte';
export class Main {
  nom:string;
  cartes: Carte[];
  constructor(cartes: Carte[], nom: string) {
    this.cartes = cartes;
    this.nom = nom;
  }
}

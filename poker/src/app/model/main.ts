import { Carte } from './carte';
export class Main {
  nom:string;
  cartes: Carte[];
  description: string;
  constructor(cartes: Carte[], nom: string, description: string) {
    this.cartes = cartes;
    this.nom = nom;
    this.description = description;
  }
}

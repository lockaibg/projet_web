import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-accueil',
  standalone: false,
  templateUrl: './accueil.html',
  styleUrl: './accueil.scss',
})
export class Accueil implements OnInit{
  titre!: string;
  slogan!: string;
  imageHero!: string;
  description!: string;

  ngOnInit(): void {

    this.titre = "Poker Master";

    this.slogan = "Entrez dans l'univers du Texas Hold'em";

    this.imageHero = "https://images.unsplash.com/photo-1511512578047-dfb367046420";

    this.description =
      "Bienvenue sur Poker Master. Découvrez les règles du poker, améliorez vos stratégies et plongez dans l’univers du Texas Hold'em. Que vous soyez débutant ou joueur confirmé, ce site vous aidera à progresser et à comprendre toutes les subtilités du jeu.";
  }

}

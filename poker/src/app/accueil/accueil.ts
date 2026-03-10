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
  presentation!: string;
  img!: string;
  desc!: string;

  ngOnInit(): void {
    this.titre = "Bienvenu venez faire du poker";
    this.presentation = "bla bla bla bla bla";
    this.img = "https://tse4.mm.bing.net/th/id/OIP._NF_QfnfUxQdpWkxvyz7ygHaE8?pid=Api";
    this.desc = "adrian content";
  }

}

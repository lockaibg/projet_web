import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header implements OnInit {
  pages!: string[];

  ngOnInit(): void {
    this.pages = [
      "accueil",
      "joueurs",
      "calculateur d'équité",
      "mains"
    ]
  }
}

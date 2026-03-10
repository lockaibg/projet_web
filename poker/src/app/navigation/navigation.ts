import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  standalone: false,
  templateUrl: './navigation.html',
  styleUrl: './navigation.scss',
})
export class Navigation implements OnInit {
  pages!: string[];
  ngOnInit(): void {
    this.pages = [
      "acceuil",
      "joueurs",
      "calculateur d'équité",
      "mains"
    ]
  }
}

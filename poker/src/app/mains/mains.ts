import { Component } from '@angular/core';
import { MainService } from '../service/mains';
import {Main} from '../model/main';

@Component({
  selector: 'app-mains',
  standalone: false,
  templateUrl: './mains.html',
  styleUrl: './mains.scss',
})
export class Mains {
  different_mains: MainService;
  mainDetails: Main | null = null;

  constructor() {
    this.different_mains = new MainService();
  }

  afficherInfos(main: Main) {
    this.mainDetails = main;
  }
}

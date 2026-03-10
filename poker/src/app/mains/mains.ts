import { Component } from '@angular/core';
import { MainService } from '../service/mains';

@Component({
  selector: 'app-mains',
  standalone: false,
  templateUrl: './mains.html',
  styleUrl: './mains.scss',
})
export class Mains {
  different_mains: MainService;

  constructor() {
    this.different_mains = new MainService();
  }

}

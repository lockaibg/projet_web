import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, isFormRecord, Validators} from "@angular/forms";

@Component({
  selector: 'app-equity-calculator',
  standalone: false,
  templateUrl: './equity-calculator.html',
  styleUrl: './equity-calculator.scss',
})
export class EquityCalculator implements OnInit {
  nbOuts!: number; // nombre de cartes qui peuvent améliorer la main du joueur
  nbChances!: number; // nombre de chances de toucher une carte gagnante
  potentialGain!: number;
  maxBet!: number;
  equity!: number; // pourcentage de chances de gagner la main
  montantPot!: number; // montant total du pot
  montantMise!: number; // montant de la mise actuelle
  montantMiseIn!: boolean;
  equityForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.equityForm = this.formBuilder.group({
      outs: [null, Validators.required],
      chances: [null, Validators.required],
      montantPot: [null, Validators.required],
      montantMise: [null]
    });
    this.equityForm.get('montantMise')?.valueChanges.subscribe(value => {
      this.montantMiseIn = value !== null && value !== '';
    });
  }

  calculateEquity() {
    this.nbOuts = this.equityForm.get('outs')?.value;
    this.nbChances = this.equityForm.get('chances')?.value;
    this.montantPot = this.equityForm.get('montantPot')?.value;
    this.montantMise = this.equityForm.get('montantMise')?.value;
    if(this.nbChances  == 1) {
      this.equity = this.nbOuts /47 * 100;
    } else if(this.nbChances == 2) {
      this.equity = 1 - ((47 - this.nbOuts) / 47) * ((46 - this.nbOuts) / 46);
      this.equity *= 100;
    }
    //TODO: utiliser une pipe pour ça potentiellement
    if(this.montantMiseIn) {
      this.potentialGain = this.equity/100 * this.montantPot - this.montantMise;
    }
    this.maxBet = this.equity/100 * this.montantPot;
  }
}

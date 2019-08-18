import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dice-roller',
  templateUrl: './dice-roller.component.html',
  styleUrls: ['./dice-roller.component.scss']
})
export class DiceRollerComponent implements OnInit {
  //Array of available die to roll
  public dice: Array<number> = [4, 6, 8, 10, 12, 20, 100];
  //Returned value of the rolled die
  public singleDieResult: number;

  //Model for multi-dice roll inputs
  public dieValue: number = 6;
  public dieCount: number = 8;
  //Array of all rolls
  public multiDieResults: Array<number> = [];
  //Sum of multi-die roll
  public multiDieSum: number;
  //Average of multidie roll
  public multiDieAvg

  constructor() { }

  ngOnInit() {
  }

  public rollSingleDie(die: number): void {
    this.singleDieResult = Math.floor((Math.random() * die) + 1);
  }

  public rollMultipleDie(): void {
    this.multiDieSum = 0;
    this.multiDieResults = [];
    for (let i = 0; i < this.dieCount; i++) {
      this.multiDieResults.push(Math.floor((Math.random() * this.dieValue) + 1));
      console.log(Math.random());
      this.multiDieSum += this.multiDieResults[i];
    }
    this.multiDieAvg = (this.multiDieSum / this.multiDieResults.length).toFixed(2);
  }

}

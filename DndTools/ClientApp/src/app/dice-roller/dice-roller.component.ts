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


  constructor() { }

  ngOnInit() {
  }

  public rollSingleDie(die: number): void {
    this.singleDieResult = Math.floor((Math.random() * die) + 1);
  }

}

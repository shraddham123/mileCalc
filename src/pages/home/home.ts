import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  cuurCost:any;
  lastKms:any;
  currKms:any;
  kmsdriven:any;
  totalmile:any;
  lastPetFill:any;
  constructor(public navCtrl: NavController, private alertCtrl: AlertController) {
    console.log(this.cuurCost);

  }
  Calculate(){
    console.log(this.cuurCost);
    console.log(this.lastKms);
    console.log(this.currKms);
    console.log(this.lastPetFill);
    this.kmsdriven = this.currKms - this.lastKms;
    this.totalmile = this.kmsdriven / this.lastPetFill;
    console.log(this.totalmile);
  }

}

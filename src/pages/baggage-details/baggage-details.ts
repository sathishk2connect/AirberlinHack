import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the BaggageDetails page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-baggage-details',
  templateUrl: 'baggage-details.html'
})
export class BaggageDetails {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello BaggageDetails Page');
  }

}

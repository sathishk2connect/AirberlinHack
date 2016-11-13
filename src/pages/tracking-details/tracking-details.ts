import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the TrackingDetails page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-tracking-details',
  templateUrl: 'tracking-details.html'
})
export class TrackingDetails {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello TrackingDetails Page');
  }

}

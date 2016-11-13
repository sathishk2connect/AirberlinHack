import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the TicketDetails page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-ticket-details',
  templateUrl: 'ticket-details.html'
})
export class TicketDetails {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello TicketDetails Page');
  }

}

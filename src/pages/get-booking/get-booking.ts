import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import {TicketBefore} from '../ticket-before/ticket-before';
import {TicketAfter} from '../ticket-after/ticket-after';

/*
  Generated class for the GetBooking page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-get-booking',
  templateUrl: 'get-booking.html'
})
export class GetBooking {

   ticketBefore = TicketBefore;
login: {bookingid?: string} = {};

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello GetBooking Page');
  }

goto(form){
  /*console.log("filled", form);
  console.log("filled", this.login.bookingid);
  if(this.login.bookingid != ""){
    this.navCtrl.push(TicketAfter);
  } else {*/
    this.navCtrl.push(TicketBefore);
  /*} */

}
}

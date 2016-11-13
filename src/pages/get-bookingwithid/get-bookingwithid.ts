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
  selector: 'page-get-bookingwithid',
  templateUrl: 'get-bookingwithid.html'
})

export class GetBookingWithId {

   ticketBefore = TicketBefore;
   login: {bookingid?: string} = {};

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello GetBooking Page');
  }

  showAfter() {
     this.navCtrl.push(TicketAfter);
  }
}

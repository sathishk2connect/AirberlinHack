import { Component, ViewChild } from '@angular/core';
import { NavController, Nav, App } from 'ionic-angular';
import {TicketDetails} from '../ticket-details/ticket-details';

import {Ticket} from '../ticket/ticket';
import {TicketAfter} from '../ticket-after/ticket-after';
import {GetBookingWithId} from '../get-bookingwithid/get-bookingwithid';

/*
  Generated class for the Schedule page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/

@Component({
  selector: 'page-schedule',
  templateUrl: 'schedule.html'
})
export class Schedule {

  constructor(public navCtrl: NavController, private app:App) {
      this.getBookingWithId =  GetBookingWithId;
  }

  ionViewDidLoad() {
    console.log('Hello Schedule Page');
  }

  loadAfter(){
   console.log("here");
   this.navCtrl.parent.parent.setRoot(this.getBookingWithId);
  }

}

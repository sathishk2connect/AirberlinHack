import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TicketDetails } from '../ticket-details/ticket-details'
import { BaggageDetails } from '../baggage-details/baggage-details'
import { TrackingDetails } from '../tracking-details/tracking-details'

/*
  Generated class for the TicketAfter tabs.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Component({
  selector: 'page-ticket-after',
  templateUrl: 'ticket-after.html'
})
export class TicketAfter {

  tab4Root: any = TicketDetails;
  tab5Root: any = BaggageDetails;
  tab6Root: any = TrackingDetails;

  constructor(public navCtrl: NavController) {

  }

}
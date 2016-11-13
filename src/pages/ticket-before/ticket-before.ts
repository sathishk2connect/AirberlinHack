import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Ticket } from '../ticket/ticket'
import { Schedule } from '../schedule/schedule'

/*
  Generated class for the TicketBefore tabs.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Component({
  selector: 'page-ticket-before',
  templateUrl: 'ticket-before.html'
})
export class TicketBefore {

  tab1Root: any = Ticket;
  tab2Root: any = Schedule;

  constructor(public navCtrl: NavController) {

  }

}
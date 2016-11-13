import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';


import {TicketAfter} from '../pages/ticket-after/ticket-after';
import {TicketDetails} from '../pages/ticket-details/ticket-details';
import {BaggageDetails} from '../pages/baggage-details/baggage-details';
import {TrackingDetails} from '../pages/tracking-details/tracking-details';

import {GetBooking} from '../pages/get-booking/get-booking';
import {GetBookingWithId} from '../pages/get-bookingwithid/get-bookingwithid';

import {TicketBefore} from'../pages/ticket-before/ticket-before';
import {Ticket} from '../pages/ticket/ticket';
import {Schedule} from '../pages/schedule/schedule';


@NgModule({
  declarations: [
    MyApp,
    TicketAfter,
    TicketDetails,
    BaggageDetails,
    TrackingDetails,
    GetBooking,
    GetBookingWithId,
    TicketBefore,
    Ticket,
    Schedule
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
   TicketAfter,
    TicketDetails,
    BaggageDetails,
    TrackingDetails,
    GetBooking,
    GetBookingWithId,
    TicketBefore,
    Ticket,
    Schedule
  ],
  providers: []
})
export class AppModule {}

import { Component } from '@angular/core';
import {Schedule} from '../schedule/schedule';
import { NavController } from 'ionic-angular';


/*
  Generated class for the Ticket page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-ticket',
  templateUrl: 'ticket.html'
})

export class Ticket {

  schedule = Schedule;

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello Ticket Page');
  }

  bookTab(){
    console.log("tab clicked");
    this.navCtrl.parent.select(1); 
  }

}

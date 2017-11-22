import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AccountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-account',
  templateUrl: 'account.html',
})

export class AccountPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
  }

  ionViewDidLoad() {
    
  }

  ionViewWillLeave() {
      
  }

  initPush() {
    console.log('--> initPush called');
  }

  isPushSupported(){
    console.log('--> isPushSupported called');
  }

  registerDevice() {
    console.log('--> registerDevice called');
  }
  
  getTags() {
    console.log('--> getTags called');
  }

  subsToTags() {
    console.log('--> subsToTags called');
  }

  getSubs() {
    console.log('--> getSubs called');
  }

  unsubsFromTags() {
    console.log('--> unsubsFromTags called');
  }

  unregisterDevice() {
    console.log('--> unregisterDevice called');
  }
}

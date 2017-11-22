import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';

import { AboutPage } from '../about/about';
import { WelcomePage } from '../welcome/welcome';
import { FeedbackPage } from '../feedback/feedback';

import { JsonStoreProvider } from '../../providers/json-store/json-store';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  login: any = { username: '', password: '' };
  submitted = false;
  challengeResponseMsg: string = '';
  lastPage: any;

  //navParams
  authHandler: any;
  isChallenged: boolean;
  
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public alertCtrl: AlertController,
              public jsonStore: JsonStoreProvider) {
    
  }

  ionViewDidLoad() {
    
  }

  ionViewWillLeave() {

  }

  onLogin() {
    console.log('--> onLogin called');
  }

  onCancel() {
    console.log('--> Login cancelled.');
    this.login.username = this.login.password = '';
  }

  presentAlert(errorMsg: string) {
    let alert = this.alertCtrl.create({
      title: 'Invalid Login Attempt',
      subTitle: errorMsg,
      buttons: ['OK']
    });
    alert.present();
  }

}

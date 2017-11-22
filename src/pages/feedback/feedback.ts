import { Component } from '@angular/core';
import { NavController, NavParams, ToastController} from 'ionic-angular';

@Component({
  selector: 'page-feedback',
  templateUrl: 'feedback.html',
})
export class FeedbackPage {

  feedbackContent: string = '';
  postResponse: string = '';

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public toastCtrl: ToastController) {}

  ionViewDidLoad() {
    
  }

  ionViewWillLeave() {
    
  }


  onSubmit() {
    console.log('--> onSubmit called');
  }

  onCancel() {
    this.feedbackContent = '';
    this.postResponse = '';
  }

  postFeedback() {
    console.log('--> postFeedback called');
  }
}
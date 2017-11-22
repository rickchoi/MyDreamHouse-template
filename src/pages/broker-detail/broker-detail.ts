import {Component} from '@angular/core';
import {NavController, NavParams, LoadingController} from 'ionic-angular';
import {BrokerService} from '../../providers/broker-service-mock';

@Component({
    selector: 'page-broker-detail',
    templateUrl: 'broker-detail.html'
})
export class BrokerDetailPage {

    broker: any;
    loading: any;

    constructor(public navCtrl: NavController, 
                public navParams: NavParams, 
                public loadingCtrl: LoadingController,
                public service: BrokerService) {        
        this.broker = this.navParams.data;
        service.findById(this.broker.id).then(
            broker => this.broker = broker
        );
    }

    ionViewDidLoad() {
        
    }

    ionViewWillLeave() {
        
    }

    initLoading() {
        this.loading = this.loadingCtrl.create({
            content: 'Loading broker detail info..'
        });
    }
}

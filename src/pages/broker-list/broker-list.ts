import {Component} from '@angular/core';
import {NavController, LoadingController} from 'ionic-angular';
import {BrokerService} from '../../providers/broker-service-mock';
import {BrokerDetailPage} from '../broker-detail/broker-detail';

@Component({
    selector: 'page-broker-list',
    templateUrl: 'broker-list.html'
})
export class BrokerListPage {

    brokers: Array<any>;
    loading: any;

    constructor(public navCtrl: NavController, 
                public loadingCtrl: LoadingController,
                public service: BrokerService) {
        service.findAll().then(data => this.brokers = data);
    }

    ionViewDidLoad() {
       
    }

    ionViewWillLeave() {
       
    }

    openBrokerDetail(broker) {
        this.navCtrl.push(BrokerDetailPage, broker);
    }

    initLoading() {
        this.loading = this.loadingCtrl.create({
            content: 'Loading list of brokers..'
        });
    }
}

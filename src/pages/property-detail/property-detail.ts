import {Component} from '@angular/core';
import {ActionSheetController, ActionSheet, NavController, NavParams, ToastController, LoadingController} from 'ionic-angular';
import {BrokerDetailPage} from '../broker-detail/broker-detail';
import {PropertyService} from '../../providers/property-service-mock';

import { JsonStoreProvider } from '../../providers/json-store/json-store';

@Component({
    selector: 'page-property-detail',
    templateUrl: 'property-detail.html'
})
export class PropertyDetailPage {

    properties: Array<any>;
    property: any;
    loading: any;

    constructor(public actionSheetCtrl: ActionSheetController, 
                public navCtrl: NavController, 
                public navParams: NavParams, 
                public propertyService: PropertyService,
                public jsonStore: JsonStoreProvider, 
                public toastCtrl: ToastController,
                public loadingCtrl: LoadingController) {
    
        this.property = this.navParams.data;
        propertyService.findById(this.property.id).then(
            property => this.property = property
        );
    }

    ionViewDidLoad() {
        
    }

    ionViewWillLeave() {
        
    }

    openBrokerDetail(broker) {
        this.navCtrl.push(BrokerDetailPage, broker);
    }

    favorite(property) {
        this.propertyService.favorite(property)
        .then(property => {
            let toast = this.toastCtrl.create({
                message: 'Property added to your favorites',
                cssClass: 'mytoast',
                duration: 1000
            });
            toast.present(toast);
        });
    }

    share(property) {
        let actionSheet: ActionSheet = this.actionSheetCtrl.create({
            title: 'Share via',
            buttons: [
                {
                    text: 'Twitter',
                    handler: () => console.log('share via twitter')
                },
                {
                    text: 'Facebook',
                    handler: () => console.log('share via facebook')
                },
                {
                    text: 'Email',
                    handler: () => console.log('share via email')
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: () => console.log('cancel share')
                }
            ]
        });
        actionSheet.present();
    }

    imageLoadCompleted() {
        
    }

    initLoading() {
        this.loading = this.loadingCtrl.create({
            content: 'Loading property detail info..'
        });
    }
}

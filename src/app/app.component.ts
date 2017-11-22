import {Component, ViewChild, Renderer2} from '@angular/core';
import {Nav, Platform, AlertController} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';

import {PropertyListPage} from '../pages/property-list/property-list';
import {BrokerListPage} from '../pages/broker-list/broker-list';
import {FavoriteListPage} from '../pages/favorite-list/favorite-list';
import {WelcomePage} from '../pages/welcome/welcome';
import {AboutPage} from '../pages/about/about';
import {AccountPage} from '../pages/account/account';
import {FeedbackPage} from '../pages/feedback/feedback';
import {LoginPage} from '../pages/login/login';

export interface MenuItem {
    title: string;
    component: any;
    icon: string;
}

@Component({
    templateUrl: 'app.html'
})
export class MyApp {
    @ViewChild(Nav) nav: Nav;

    rootPage: any = WelcomePage; // work with this for dev and testing

    appMenuItems: Array<MenuItem>;

    accountMenuItems: Array<MenuItem>;

    helpMenuItems: Array<MenuItem>;

    authHandler: any;    

    constructor(public platform: Platform, 
                public statusBar: StatusBar, 
                public splashScreen: SplashScreen, 
                public renderer: Renderer2,
                public alertCtrl: AlertController) {
        
        this.initializeApp();

        this.appMenuItems = [
            {title: 'Properties', component: PropertyListPage, icon: 'home'},
            {title: 'Brokers', component: BrokerListPage, icon: 'people'},
            {title: 'Favorites', component: FavoriteListPage, icon: 'star'}
        ];

        this.accountMenuItems = [
            {title: 'My Account', component: AccountPage, icon: 'ios-contact'},
            {title: 'Logout', component: LoginPage, icon: 'log-out'}
        ];

        this.helpMenuItems = [
            {title: 'Feedback', component: FeedbackPage, icon: 'ios-create'},
            {title: 'About', component: AboutPage, icon: 'information-circle'}
        ];
    }

    initializeApp() {
        this.platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            this.statusBar.styleLightContent();
            this.splashScreen.hide();
        });
    }

    openPage(page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    }
}

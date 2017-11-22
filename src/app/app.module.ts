import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import {WelcomePage} from '../pages/welcome/welcome';
import {PropertyListPage} from '../pages/property-list/property-list';
import {PropertyDetailPage} from '../pages/property-detail/property-detail';
import {BrokerListPage} from '../pages/broker-list/broker-list';
import {BrokerDetailPage} from '../pages/broker-detail/broker-detail';
import {FavoriteListPage} from '../pages/favorite-list/favorite-list';
import {AboutPage} from '../pages/about/about';
import {LoginPage} from '../pages/login/login';
import {AccountPage} from '../pages/account/account';
import {FeedbackPage} from '../pages/feedback/feedback';

import {PropertyService} from "../providers/property-service-mock";
import {BrokerService} from "../providers/broker-service-mock";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { JsonStoreProvider } from '../providers/json-store/json-store';

@NgModule({
  declarations: [
    MyApp,
    WelcomePage,
    AboutPage,
    LoginPage,
    AccountPage,
    FeedbackPage,
    PropertyListPage,
    PropertyDetailPage,
    FavoriteListPage,
    BrokerListPage,
    BrokerDetailPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    WelcomePage,
    AboutPage,
    LoginPage,
    AccountPage,
    FeedbackPage,
    PropertyListPage,
    PropertyDetailPage,
    FavoriteListPage,
    BrokerListPage,
    BrokerDetailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    PropertyService,
    BrokerService,    
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    JsonStoreProvider
  ]
})
export class AppModule {}

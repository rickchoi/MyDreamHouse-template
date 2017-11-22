webpackJsonp([0],{

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PropertyDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__broker_detail_broker_detail__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_property_service_mock__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_json_store_json_store__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PropertyDetailPage = (function () {
    function PropertyDetailPage(actionSheetCtrl, navCtrl, navParams, propertyService, jsonStore, toastCtrl, loadingCtrl) {
        var _this = this;
        this.actionSheetCtrl = actionSheetCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.propertyService = propertyService;
        this.jsonStore = jsonStore;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.property = this.navParams.data;
        propertyService.findById(this.property.id).then(function (property) { return _this.property = property; });
    }
    PropertyDetailPage.prototype.ionViewDidLoad = function () {
    };
    PropertyDetailPage.prototype.ionViewWillLeave = function () {
    };
    PropertyDetailPage.prototype.openBrokerDetail = function (broker) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__broker_detail_broker_detail__["a" /* BrokerDetailPage */], broker);
    };
    PropertyDetailPage.prototype.favorite = function (property) {
        var _this = this;
        this.propertyService.favorite(property)
            .then(function (property) {
            var toast = _this.toastCtrl.create({
                message: 'Property added to your favorites',
                cssClass: 'mytoast',
                duration: 1000
            });
            toast.present(toast);
        });
    };
    PropertyDetailPage.prototype.share = function (property) {
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Share via',
            buttons: [
                {
                    text: 'Twitter',
                    handler: function () { return console.log('share via twitter'); }
                },
                {
                    text: 'Facebook',
                    handler: function () { return console.log('share via facebook'); }
                },
                {
                    text: 'Email',
                    handler: function () { return console.log('share via email'); }
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () { return console.log('cancel share'); }
                }
            ]
        });
        actionSheet.present();
    };
    PropertyDetailPage.prototype.imageLoadCompleted = function () {
    };
    PropertyDetailPage.prototype.initLoading = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Loading property detail info..'
        });
    };
    PropertyDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-property-detail',template:/*ion-inline-start:"/Users/yongkwonrickchoi/Temp/dreamhouse-template/src/pages/property-detail/property-detail.html"*/`<ion-header>\n    <ion-navbar>\n        <ion-title>Property</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <ion-card *ngIf="property.id">\n        <img src="{{property.picture}}" (load)="imageLoadCompleted()"/>\n        <ion-card-content>\n            <h2 class="card-title">{{property.title}}</h2>\n            <p>{{property.address}}, {{property.city}} {{property.state}}</p>\n        </ion-card-content>\n        <ion-list>\n\n            <ion-item>\n                <ion-icon item-left name="moon"></ion-icon>\n                <h3>Bedrooms</h3>\n                <ion-note item-right>{{property.bedrooms}}</ion-note>\n            </ion-item>\n            <ion-item>\n                <ion-icon item-left name="leaf"></ion-icon>\n                <h3>Bathrooms</h3>\n                <ion-note item-right>{{property.bathrooms}}</ion-note>\n            </ion-item>\n            <ion-item>\n                <ion-icon item-left name="pricetag"></ion-icon>\n                <h3>Asking Price</h3>\n                <ion-note item-right>{{property.price}}</ion-note>\n            </ion-item>\n            <button ion-item (click)="openBrokerDetail(property.broker)">\n                <ion-avatar item-left>\n                    <img src="{{property.broker.picture}}"/>\n                </ion-avatar>\n                <h2>{{property.broker.name}}</h2>\n                <p>{{property.broker.title}}</p>\n            </button>\n        </ion-list>\n\n        <ion-item>\n            <button ion-button icon-left (click)="favorite(property)" clear item-left>\n                <ion-icon name="star"></ion-icon>\n                Favorite\n            </button>\n            <button ion-button icon-left (click)="share(property)" clear item-right>\n                <ion-icon name="share"></ion-icon>\n                Share\n            </button>\n        </ion-item>\n\n    </ion-card>\n</ion-content>\n`/*ion-inline-end:"/Users/yongkwonrickchoi/Temp/dreamhouse-template/src/pages/property-detail/property-detail.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_property_service_mock__["a" /* PropertyService */],
            __WEBPACK_IMPORTED_MODULE_4__providers_json_store_json_store__["a" /* JsonStoreProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
    ], PropertyDetailPage);
    return PropertyDetailPage;
}());

//# sourceMappingURL=property-detail.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BrokerDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_broker_service_mock__ = __webpack_require__(103);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BrokerDetailPage = (function () {
    function BrokerDetailPage(navCtrl, navParams, loadingCtrl, service) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.service = service;
        this.broker = this.navParams.data;
        service.findById(this.broker.id).then(function (broker) { return _this.broker = broker; });
    }
    BrokerDetailPage.prototype.ionViewDidLoad = function () {
    };
    BrokerDetailPage.prototype.ionViewWillLeave = function () {
    };
    BrokerDetailPage.prototype.initLoading = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Loading broker detail info..'
        });
    };
    BrokerDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-broker-detail',template:/*ion-inline-start:"/Users/yongkwonrickchoi/Temp/dreamhouse-template/src/pages/broker-detail/broker-detail.html"*/`<ion-header>\n    <ion-navbar>\n        <ion-title>Broker</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="broker">\n\n    <ion-card>\n\n        <ion-card-content>\n            <img src="{{broker.picture}}"/>\n            <h2>{{broker.name}}</h2>\n            <h3>{{broker.title}}</h3>\n        </ion-card-content>\n\n        <ion-list>\n            <a href="tel:{{broker.Phone__c}}" ion-item>\n                <ion-icon name="call" item-left></ion-icon>\n                <p>Call Office</p>\n                <h2>{{broker.phone}}</h2>\n            </a>\n            <a href="tel:{{broker.phone}}" ion-item>\n                <ion-icon name="call" item-left></ion-icon>\n                <p>Call Mobile</p>\n                <h2>{{broker.mobilePhone}}</h2>\n            </a>\n            <a href="sms:{{broker.phone}}" ion-item>\n                <ion-icon name="text" item-left></ion-icon>\n                <p>Text</p>\n                <h2>{{broker.mobilePhone}}</h2>\n            </a>\n            <a href="mailto:{{broker.email}}" ion-item>\n                <ion-icon name="mail" item-left></ion-icon>\n                <p>Email</p>\n                <h2>{{broker.email}}</h2>\n            </a>\n        </ion-list>\n\n    </ion-card>\n\n</ion-content>\n`/*ion-inline-end:"/Users/yongkwonrickchoi/Temp/dreamhouse-template/src/pages/broker-detail/broker-detail.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_broker_service_mock__["a" /* BrokerService */]])
    ], BrokerDetailPage);
    return BrokerDetailPage;
}());

//# sourceMappingURL=broker-detail.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BrokerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mock_brokers__ = __webpack_require__(285);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var BrokerService = (function () {
    function BrokerService() {
        this.myBrokers = [];
    }
    BrokerService.prototype.findAll = function () {
        return Promise.resolve(__WEBPACK_IMPORTED_MODULE_1__mock_brokers__["a" /* default */]);
    };
    BrokerService.prototype.findById = function (id) {
        return Promise.resolve(__WEBPACK_IMPORTED_MODULE_1__mock_brokers__["a" /* default */][id - 1]);
    };
    BrokerService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], BrokerService);
    return BrokerService;
}());

//# sourceMappingURL=broker-service-mock.js.map

/***/ }),

/***/ 114:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 114;

/***/ }),

/***/ 155:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 155;

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PropertyListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_property_service_mock__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__property_detail_property_detail__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_leaflet__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_leaflet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_leaflet__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PropertyListPage = (function () {
    function PropertyListPage(navCtrl, service, loadingCtrl, config) {
        this.navCtrl = navCtrl;
        this.service = service;
        this.loadingCtrl = loadingCtrl;
        this.config = config;
        this.searchKey = "";
        this.viewMode = "list";
        this.findAll();
    }
    PropertyListPage.prototype.ionViewDidLoad = function () {
    };
    PropertyListPage.prototype.ionViewWillLeave = function () {
    };
    PropertyListPage.prototype.openPropertyDetail = function (property) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__property_detail_property_detail__["a" /* PropertyDetailPage */], property);
    };
    PropertyListPage.prototype.onInput = function (event) {
        var _this = this;
        this.service.findByName(this.searchKey)
            .then(function (data) {
            _this.properties = data;
            if (_this.viewMode === "map") {
                _this.showMarkers();
            }
        })
            .catch(function (error) { return alert(JSON.stringify(error)); });
    };
    PropertyListPage.prototype.onCancel = function (event) {
        this.findAll();
    };
    PropertyListPage.prototype.findAll = function () {
        var _this = this;
        this.service.findAll()
            .then(function (data) { return _this.properties = data; })
            .catch(function (error) { return alert(error); });
    };
    PropertyListPage.prototype.showMap = function () {
        var _this = this;
        setTimeout(function () {
            _this.map = __WEBPACK_IMPORTED_MODULE_4_leaflet___default.a.map("map").setView([42.361132, -71.070876], 14);
            __WEBPACK_IMPORTED_MODULE_4_leaflet___default.a.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', {
                attribution: 'Tiles &copy; Esri'
            }).addTo(_this.map);
            _this.showMarkers();
        });
    };
    PropertyListPage.prototype.showMarkers = function () {
        var _this = this;
        if (this.markersGroup) {
            this.map.removeLayer(this.markersGroup);
        }
        this.markersGroup = __WEBPACK_IMPORTED_MODULE_4_leaflet___default.a.layerGroup([]);
        this.properties.forEach(function (property) {
            if (property.lat, property.long) {
                var marker = __WEBPACK_IMPORTED_MODULE_4_leaflet___default.a.marker([property.lat, property.long]).on('click', function (event) { return _this.openPropertyDetail(event.target.data); });
                marker.data = property;
                _this.markersGroup.addLayer(marker);
            }
        });
        this.map.addLayer(this.markersGroup);
    };
    PropertyListPage.prototype.initLoading = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Loading list of properties..'
        });
    };
    PropertyListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-property-list',template:/*ion-inline-start:"/Users/yongkwonrickchoi/Temp/dreamhouse-template/src/pages/property-list/property-list.html"*/`<ion-header>\n\n    <ion-navbar>\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-searchbar [(ngModel)]="searchKey" (ionInput)="onInput($event)"\n                       (ionCancel)="onCancel($event)"></ion-searchbar>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="property-list">\n\n    <ion-list *ngIf="viewMode===\'list\'">\n        <button ion-item (click)="openPropertyDetail(property)" *ngFor="let property of properties">\n            <ion-thumbnail item-left>\n                <img src="{{property.thumbnail}}"/>\n            </ion-thumbnail>\n            <h2>{{property.title}}</h2>\n            <p>{{property.city}}, {{property.state}} ∙ {{ property.price }}</p>\n        </button>\n    </ion-list>\n\n    <div *ngIf="viewMode===\'map\'" style="width:100%;height:100%;" id="map"></div>\n\n</ion-content>\n\n<ion-footer padding>\n    <ion-segment [(ngModel)]="viewMode">\n        <ion-segment-button value="list">\n            <ion-icon name="list"></ion-icon>\n        </ion-segment-button>\n        <ion-segment-button value="map" (ionSelect)="showMap()">\n            <ion-icon name="map"></ion-icon>\n        </ion-segment-button>\n    </ion-segment>\n</ion-footer>\n`/*ion-inline-end:"/Users/yongkwonrickchoi/Temp/dreamhouse-template/src/pages/property-list/property-list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_property_service_mock__["a" /* PropertyService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Config */]])
    ], PropertyListPage);
    return PropertyListPage;
}());

//# sourceMappingURL=property-list.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BrokerListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_broker_service_mock__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__broker_detail_broker_detail__ = __webpack_require__(102);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BrokerListPage = (function () {
    function BrokerListPage(navCtrl, loadingCtrl, service) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.service = service;
        service.findAll().then(function (data) { return _this.brokers = data; });
    }
    BrokerListPage.prototype.ionViewDidLoad = function () {
    };
    BrokerListPage.prototype.ionViewWillLeave = function () {
    };
    BrokerListPage.prototype.openBrokerDetail = function (broker) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__broker_detail_broker_detail__["a" /* BrokerDetailPage */], broker);
    };
    BrokerListPage.prototype.initLoading = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Loading list of brokers..'
        });
    };
    BrokerListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-broker-list',template:/*ion-inline-start:"/Users/yongkwonrickchoi/Temp/dreamhouse-template/src/pages/broker-list/broker-list.html"*/`<ion-header>\n    <ion-navbar>\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>Brokers</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n    <ion-list>\n\n        <button ion-item *ngFor="let broker of brokers" (click)="openBrokerDetail(broker)">\n            <ion-avatar item-left>\n                <img src="{{broker.picture}}"/>\n            </ion-avatar>\n            <h2>{{broker.name}}</h2>\n            <p>{{broker.title}}</p>\n        </button>\n\n    </ion-list>\n\n</ion-content>\n`/*ion-inline-end:"/Users/yongkwonrickchoi/Temp/dreamhouse-template/src/pages/broker-list/broker-list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_broker_service_mock__["a" /* BrokerService */]])
    ], BrokerListPage);
    return BrokerListPage;
}());

//# sourceMappingURL=broker-list.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavoriteListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_property_service_mock__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__property_detail_property_detail__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_json_store_json_store__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FavoriteListPage = (function () {
    function FavoriteListPage(navCtrl, service, jsonStore) {
        this.navCtrl = navCtrl;
        this.service = service;
        this.jsonStore = jsonStore;
        this.getFavorites();
    }
    FavoriteListPage.prototype.ionViewDidLoad = function () {
    };
    FavoriteListPage.prototype.ionViewWillLeave = function () {
    };
    FavoriteListPage.prototype.itemTapped = function (favorite) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__property_detail_property_detail__["a" /* PropertyDetailPage */], favorite.property);
    };
    FavoriteListPage.prototype.deleteItem = function (favorite) {
        var _this = this;
        this.service.unfavorite(favorite)
            .then(function () {
            _this.getFavorites();
        })
            .catch(function (error) { return alert(JSON.stringify(error)); });
    };
    FavoriteListPage.prototype.getFavorites = function () {
        var _this = this;
        this.service.getFavorites()
            .then(function (data) { return _this.favorites = data; });
    };
    FavoriteListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-favorite-list',template:/*ion-inline-start:"/Users/yongkwonrickchoi/Temp/dreamhouse-template/src/pages/favorite-list/favorite-list.html"*/`<ion-header>\n    <ion-navbar>\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>Favorites</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <ion-list>\n        <ion-item-sliding *ngFor="let favorite of favorites">\n            <button ion-item (click)="itemTapped(favorite)">\n                <ion-thumbnail item-left>\n                    <img src="{{favorite.property.thumbnail}}"/>                    \n                </ion-thumbnail>\n                <h2>{{favorite.property.title}}</h2>                \n                <p>{{favorite.property.city}}, {{favorite.property.state}} ∙ {{favorite.property.price}}</p>\n            </button>\n            <ion-item-options>\n                <button danger (click)="deleteItem(favorite)">Delete</button>\n            </ion-item-options>\n        </ion-item-sliding>\n    </ion-list>\n</ion-content>\n`/*ion-inline-end:"/Users/yongkwonrickchoi/Temp/dreamhouse-template/src/pages/favorite-list/favorite-list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_property_service_mock__["a" /* PropertyService */],
            __WEBPACK_IMPORTED_MODULE_4__providers_json_store_json_store__["a" /* JsonStoreProvider */]])
    ], FavoriteListPage);
    return FavoriteListPage;
}());

//# sourceMappingURL=favorite-list.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WelcomePage = (function () {
    function WelcomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    WelcomePage.prototype.loginApp = function () {
        console.log('--> loginApp called');
    };
    WelcomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-welcome',template:/*ion-inline-start:"/Users/yongkwonrickchoi/Temp/dreamhouse-template/src/pages/welcome/welcome.html"*/`<ion-header>\n    <ion-navbar>\n        <!-- The following menu button will be removed in the final package. Leaving it here for test purpose. -->\n        \n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        \n        <ion-title>Welcome</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content no-bounce>\n    <ion-slides pager="true">\n\n        <ion-slide style="background-image: url(\'assets/img/slide_properties.jpg\')">\n            <p>Your dream house is just a few taps away! Select Properties in the menu to start your search.</p>\n        </ion-slide>\n\n        <ion-slide style="background-image: url(\'assets/img/slide_brokers.jpg\')">\n            <p>Select Brokers in the menu to connect with the best brokers in the business in a whole new way!</p>\n        </ion-slide>\n\n        <ion-slide style="background-image: url(\'assets/img/slide_favorites.jpg\')">\n            <p>Keep track of your favorites and get notified in real time when important events happen.<br>\n                <button ion-button round outline color="light" strong="true" (click)="loginApp()">\n                    Login\n                </button>\n            </p>\n        </ion-slide>\n\n    </ion-slides>\n\n</ion-content>\n`/*ion-inline-end:"/Users/yongkwonrickchoi/Temp/dreamhouse-template/src/pages/welcome/welcome.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]])
    ], WelcomePage);
    return WelcomePage;
}());

//# sourceMappingURL=welcome.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutPage = (function () {
    function AboutPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    AboutPage.prototype.ionViewWillLeave = function () {
    };
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"/Users/yongkwonrickchoi/Temp/dreamhouse-template/src/pages/about/about.html"*/`<ion-header>\n    <ion-navbar>\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>About</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content no-bounce>\n\n    <div class="about-header">\n        <img src="assets/img/dreamhouse-logo.svg">\n    </div>\n\n    <div padding class="about-info">\n        <h4>DreamHouse Application</h4>\n        <p>\n            DreamHouse is a sample application that demonstrayes how to build apps with Ionic 3, Angular 4, Node.js, and IBM Mobile Foundation.\n        </p>\n        <p style="color: black !important;">\n            Please go to main menu on top left corner of screen to start using the app.\n        </p>\n    </div>\n</ion-content>\n`/*ion-inline-end:"/Users/yongkwonrickchoi/Temp/dreamhouse-template/src/pages/about/about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the AccountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AccountPage = (function () {
    function AccountPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AccountPage.prototype.ionViewDidLoad = function () {
    };
    AccountPage.prototype.ionViewWillLeave = function () {
    };
    AccountPage.prototype.initPush = function () {
        console.log('--> initPush called');
    };
    AccountPage.prototype.isPushSupported = function () {
        console.log('--> isPushSupported called');
    };
    AccountPage.prototype.registerDevice = function () {
        console.log('--> registerDevice called');
    };
    AccountPage.prototype.getTags = function () {
        console.log('--> getTags called');
    };
    AccountPage.prototype.subsToTags = function () {
        console.log('--> subsToTags called');
    };
    AccountPage.prototype.getSubs = function () {
        console.log('--> getSubs called');
    };
    AccountPage.prototype.unsubsFromTags = function () {
        console.log('--> unsubsFromTags called');
    };
    AccountPage.prototype.unregisterDevice = function () {
        console.log('--> unregisterDevice called');
    };
    AccountPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-account',template:/*ion-inline-start:"/Users/yongkwonrickchoi/Temp/dreamhouse-template/src/pages/account/account.html"*/`<!--\n  Generated template for the AccountPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Account</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <button  ion-button (click)="isPushSupported()" color="positive" block>is push supported?</button>\n  <button  ion-button (click)="registerDevice()" color="positive" block>register device</button>\n  <button  ion-button (click)="getTags()" color="positive" block>get tags</button>\n  <button  ion-button (click)="subsToTags()" color="positive" block>subscribe to tags</button>\n  <button  ion-button (click)="getSubs()" color="positive" block>get subscriptions</button>\n  <button  ion-button (click)="unsubsFromTags()" color="positive" block>unsubscribe from tags</button>\n  <button  ion-button (click)="unregisterDevice()" color="positive" block>unregister device</button>\n\n</ion-content>\n`/*ion-inline-end:"/Users/yongkwonrickchoi/Temp/dreamhouse-template/src/pages/account/account.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], AccountPage);
    return AccountPage;
}());

//# sourceMappingURL=account.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedbackPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FeedbackPage = (function () {
    function FeedbackPage(navCtrl, navParams, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.feedbackContent = '';
        this.postResponse = '';
    }
    FeedbackPage.prototype.ionViewDidLoad = function () {
    };
    FeedbackPage.prototype.ionViewWillLeave = function () {
    };
    FeedbackPage.prototype.onSubmit = function () {
        console.log('--> onSubmit called');
    };
    FeedbackPage.prototype.onCancel = function () {
        this.feedbackContent = '';
        this.postResponse = '';
    };
    FeedbackPage.prototype.postFeedback = function () {
        console.log('--> postFeedback called');
    };
    FeedbackPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-feedback',template:/*ion-inline-start:"/Users/yongkwonrickchoi/Temp/dreamhouse-template/src/pages/feedback/feedback.html"*/`<ion-header>\n    <ion-navbar>\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>Feedback</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <div>\n      <img src="assets/img/customer-feedback.png" alt="DreamHouse logo" style="display:block;width:70%;height:auto; margin-left:auto;margin-right:auto;">\n    </div>\n\n    <ion-item>\n      <ion-textarea style="height: 30vh;" [attr.rows]="10" placeholder="Please enter your feedback here." [(ngModel)]="feedbackContent"></ion-textarea>\n    </ion-item>\n    <div class="spacer" style="height: 20px;"></div>\n    <ion-row responsive-sm>\n      <ion-col>\n        <button ion-button (click)="onSubmit()" block [disabled]="feedbackContent == \'\'">\n          Submit\n        </button>\n      </ion-col>\n      <ion-col>\n        <button ion-button (click)="onCancel()" color="light" block [disabled]="feedbackContent == \'\' && postResponse == \'\'">\n          Cancel\n        </button>\n      </ion-col>\n    </ion-row>\n    <br>\n    <div *ngIf="postResponse">\n      <p><font color="red">{{ postResponse }}</font></p>\n    </div>\n</ion-content>`/*ion-inline-end:"/Users/yongkwonrickchoi/Temp/dreamhouse-template/src/pages/feedback/feedback.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */]])
    ], FeedbackPage);
    return FeedbackPage;
}());

//# sourceMappingURL=feedback.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_json_store_json_store__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginPage = (function () {
    function LoginPage(navCtrl, navParams, alertCtrl, jsonStore) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.jsonStore = jsonStore;
        this.login = { username: '', password: '' };
        this.submitted = false;
        this.challengeResponseMsg = '';
    }
    LoginPage.prototype.ionViewDidLoad = function () {
    };
    LoginPage.prototype.ionViewWillLeave = function () {
    };
    LoginPage.prototype.onLogin = function () {
        console.log('--> onLogin called');
    };
    LoginPage.prototype.onCancel = function () {
        console.log('--> Login cancelled.');
        this.login.username = this.login.password = '';
    };
    LoginPage.prototype.presentAlert = function (errorMsg) {
        var alert = this.alertCtrl.create({
            title: 'Invalid Login Attempt',
            subTitle: errorMsg,
            buttons: ['OK']
        });
        alert.present();
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/yongkwonrickchoi/Temp/dreamhouse-template/src/pages/login/login.html"*/`<ion-header>\n\n  <ion-navbar>\n    <ion-title>Login</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <div class="spacer" style="width:300px;height:10px;" id="login-spacer3"></div>\n    <form id="login-form1">\n      <div>\n        <img src="assets/img/mobile_foundation_hero.png" style="display:block;width:70%;height:auto;margin-left:auto;margin-right:auto;" />\n      </div>\n      <div class="spacer" style="width:300px;height:10px;" id="login-spacer2"></div>\n      <ion-list id="login-list1">\n        <ion-item id="login-input1">\n          <ion-label stacked>\n            Username\n          </ion-label>\n          <ion-input id="username" type="text" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" \n                      placeholder="" [(ngModel)]="login.username" name="username"></ion-input>\n        </ion-item>\n        <ion-item id="login-input2">\n          <ion-label stacked>\n            Password\n          </ion-label>\n          <ion-input id="password" type="password" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" \n                      placeholder="" [(ngModel)]="login.password" name="password"></ion-input>\n        </ion-item>\n      </ion-list>\n      <div class="spacer" style="width:300px;height:5px;" id="login-spacer1"></div>\n      <ion-row responsive-sm>\n        <ion-col>\n          <button ion-button (click)="onLogin()" color="primary" block>\n            Login\n          </button>\n        </ion-col>\n        <ion-col>\n          <button ion-button (click)="onCancel()" color="light" block>Cancel</button>\n        </ion-col>\n      </ion-row>\n    </form>\n    <div *ngIf="challengeResponseMsg">\n      <p><font color="red">{{ challengeResponseMsg }}</font></p>\n    </div>\n</ion-content>\n`/*ion-inline-end:"/Users/yongkwonrickchoi/Temp/dreamhouse-template/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_json_store_json_store__["a" /* JsonStoreProvider */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(231);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 231:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_welcome_welcome__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_property_list_property_list__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_property_detail_property_detail__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_broker_list_broker_list__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_broker_detail_broker_detail__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_favorite_list_favorite_list__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_about_about__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_login_login__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_account_account__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_feedback_feedback__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_property_service_mock__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_broker_service_mock__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_status_bar__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_splash_screen__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_json_store_json_store__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_welcome_welcome__["a" /* WelcomePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_account_account__["a" /* AccountPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_feedback_feedback__["a" /* FeedbackPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_property_list_property_list__["a" /* PropertyListPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_property_detail_property_detail__["a" /* PropertyDetailPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_favorite_list_favorite_list__["a" /* FavoriteListPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_broker_list_broker_list__["a" /* BrokerListPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_broker_detail_broker_detail__["a" /* BrokerDetailPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_welcome_welcome__["a" /* WelcomePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_account_account__["a" /* AccountPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_feedback_feedback__["a" /* FeedbackPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_property_list_property_list__["a" /* PropertyListPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_property_detail_property_detail__["a" /* PropertyDetailPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_favorite_list_favorite_list__["a" /* FavoriteListPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_broker_list_broker_list__["a" /* BrokerListPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_broker_detail_broker_detail__["a" /* BrokerDetailPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_17__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_18__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_15__providers_property_service_mock__["a" /* PropertyService */],
                __WEBPACK_IMPORTED_MODULE_16__providers_broker_service_mock__["a" /* BrokerService */],
                { provide: __WEBPACK_IMPORTED_MODULE_2__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_19__providers_json_store_json_store__["a" /* JsonStoreProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_property_list_property_list__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_broker_list_broker_list__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_favorite_list_favorite_list__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_welcome_welcome__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_about_about__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_account_account__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_feedback_feedback__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_login_login__ = __webpack_require__(206);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, renderer, alertCtrl) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.renderer = renderer;
        this.alertCtrl = alertCtrl;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_7__pages_welcome_welcome__["a" /* WelcomePage */]; // work with this for dev and testing
        this.initializeApp();
        this.appMenuItems = [
            { title: 'Properties', component: __WEBPACK_IMPORTED_MODULE_4__pages_property_list_property_list__["a" /* PropertyListPage */], icon: 'home' },
            { title: 'Brokers', component: __WEBPACK_IMPORTED_MODULE_5__pages_broker_list_broker_list__["a" /* BrokerListPage */], icon: 'people' },
            { title: 'Favorites', component: __WEBPACK_IMPORTED_MODULE_6__pages_favorite_list_favorite_list__["a" /* FavoriteListPage */], icon: 'star' }
        ];
        this.accountMenuItems = [
            { title: 'My Account', component: __WEBPACK_IMPORTED_MODULE_9__pages_account_account__["a" /* AccountPage */], icon: 'ios-contact' },
            { title: 'Logout', component: __WEBPACK_IMPORTED_MODULE_11__pages_login_login__["a" /* LoginPage */], icon: 'log-out' }
        ];
        this.helpMenuItems = [
            { title: 'Feedback', component: __WEBPACK_IMPORTED_MODULE_10__pages_feedback_feedback__["a" /* FeedbackPage */], icon: 'ios-create' },
            { title: 'About', component: __WEBPACK_IMPORTED_MODULE_8__pages_about_about__["a" /* AboutPage */], icon: 'information-circle' }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleLightContent();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/yongkwonrickchoi/Temp/dreamhouse-template/src/app/app.html"*/`<ion-menu [content]="content">\n\n  <ion-content>\n\n    <img src="assets/img/dreamhouse-logo.svg" class="menu-logo"/>\n\n    <ion-list>\n      <ion-list-header>\n        Shop\n      </ion-list-header>\n      <button menuClose ion-item *ngFor="let menuItem of appMenuItems" (click)="openPage(menuItem)">\n        <ion-icon item-left [name]="menuItem.icon"></ion-icon>\n        {{menuItem.title}}\n      </button>\n    </ion-list>\n\n    <ion-list>\n      <ion-list-header>\n        Help\n      </ion-list-header>\n      <button menuClose ion-item *ngFor="let menuItem of helpMenuItems" (click)="openPage(menuItem)">\n        <ion-icon item-left [name]="menuItem.icon"></ion-icon>\n        {{menuItem.title}}\n      </button>\n    </ion-list>\n\n    <ion-list>\n      <ion-list-header>\n        Account\n      </ion-list-header>\n      <button menuClose ion-item *ngFor="let menuItem of accountMenuItems" (click)="openPage(menuItem)">\n        <ion-icon item-left [name]="menuItem.icon"></ion-icon>\n        {{menuItem.title}}\n      </button>\n    </ion-list>\n\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n`/*ion-inline-end:"/Users/yongkwonrickchoi/Temp/dreamhouse-template/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Renderer2 */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var properties = [
    {
        id: 1,
        address: "18 Henry st",
        city: "Cambridge",
        state: "MA",
        zip: "01742",
        price: "$975,000",
        title: "Stunning Victorian",
        bedrooms: 4,
        bathrooms: 3,
        long: -71.11095,
        lat: 42.35663,
        picture: "https://s3-us-west-1.amazonaws.com/sfdc-demo/realty/house01.jpg",
        thumbnail: "https://s3-us-west-1.amazonaws.com/sfdc-demo/realty/house01sq.jpg",
        tags: "colonial",
        description: "Lorem ipsum dolor sit amet",
        broker: {
            id: 1,
            name: "Caroline Kingsley",
            title: "Senior Broker",
            picture: "https://s3-us-west-1.amazonaws.com/sfdc-demo/people/caroline_kingsley.jpg"
        }
    },
    {
        id: 2,
        address: "24 Pearl st",
        city: "Cambridge",
        state: "MA",
        zip: "02420",
        price: "$1,200,000",
        title: "Ultimate Sophistication",
        bedrooms: 5,
        bathrooms: 4,
        long: -71.10869,
        lat: 42.359103,
        picture: "https://s3-us-west-1.amazonaws.com/sfdc-demo/realty/house02.jpg",
        thumbnail: "https://s3-us-west-1.amazonaws.com/sfdc-demo/realty/house02sq.jpg",
        tags: "colonial",
        description: "Lorem ipsum dolor sit amet",
        broker: {
            id: 1,
            name: "Caroline Kingsley",
            title: "Senior Broker",
            picture: "https://s3-us-west-1.amazonaws.com/sfdc-demo/people/caroline_kingsley.jpg"
        }
    },
    {
        id: 3,
        address: "61 West Cedar st",
        city: "Boston",
        state: "MA",
        zip: "02420",
        price: "$825,000",
        title: "Modern City Living",
        bedrooms: 5,
        bathrooms: 4,
        long: -71.070061,
        lat: 42.359986,
        picture: "https://s3-us-west-1.amazonaws.com/sfdc-demo/realty/house03.jpg",
        thumbnail: "https://s3-us-west-1.amazonaws.com/sfdc-demo/realty/house03sq.jpg",
        tags: "contemporary",
        description: "Lorem ipsum dolor sit amet",
        broker: {
            id: 2,
            name: "Michael Jones",
            title: "Senior Broker",
            picture: "https://s3-us-west-1.amazonaws.com/sfdc-demo/people/michael_jones.jpg"
        }
    },
    {
        id: 4,
        address: "32 Prince st",
        city: "Cambridge",
        state: "MA",
        zip: "02420",
        price: "$930,000",
        title: "Stunning Colonial",
        bedrooms: 5,
        bathrooms: 4,
        long: -71.110448,
        lat: 42.360642,
        picture: "https://s3-us-west-1.amazonaws.com/sfdc-demo/realty/house04.jpg",
        thumbnail: "https://s3-us-west-1.amazonaws.com/sfdc-demo/realty/house04sq.jpg",
        tags: "victorian",
        description: "Lorem ipsum dolor sit amet",
        broker: {
            id: 3,
            name: "Jonathan Bradley",
            title: "Senior Broker",
            picture: "https://s3-us-west-1.amazonaws.com/sfdc-demo/people/jonathan_bradley.jpg"
        }
    },
    {
        id: 5,
        address: "211 Charles Street",
        city: "Boston",
        state: "MA",
        zip: "02420",
        price: "$850,000",
        title: "Waterfront in the City",
        bedrooms: 3,
        bathrooms: 2,
        long: -71.084454,
        lat: 42.368168,
        picture: "https://s3-us-west-1.amazonaws.com/sfdc-demo/realty/house05.jpg",
        thumbnail: "https://s3-us-west-1.amazonaws.com/sfdc-demo/realty/house05sq.jpg",
        tags: "contemporary",
        description: "Lorem ipsum dolor sit amet",
        broker: {
            id: 4,
            name: "Jennifer Wu",
            title: "Senior Broker",
            picture: "https://s3-us-west-1.amazonaws.com/sfdc-demo/people/jennifer_wu.jpg"
        }
    },
    {
        id: 6,
        address: "448 Hanover st",
        city: "Boston",
        state: "MA",
        zip: "02420",
        price: "$725,000",
        title: "Quiet Retreat",
        bedrooms: 4,
        bathrooms: 2,
        long: -71.052617,
        lat: 42.366855,
        picture: "https://s3-us-west-1.amazonaws.com/sfdc-demo/realty/house06.jpg",
        thumbnail: "https://s3-us-west-1.amazonaws.com/sfdc-demo/realty/house06sq.jpg",
        tags: "colonial",
        description: "Lorem ipsum dolor sit amet",
        broker: {
            id: 5,
            name: "Olivia Green",
            title: "Senior Broker",
            picture: "https://s3-us-west-1.amazonaws.com/sfdc-demo/people/olivia_green.jpg"
        }
    },
    {
        id: 7,
        address: "127 Endicott st",
        city: "Boston",
        state: "MA",
        zip: "02420",
        price: "$450,000",
        title: "City Living",
        bedrooms: 3,
        bathrooms: 1,
        long: -71.057352,
        lat: 42.365003,
        picture: "https://s3-us-west-1.amazonaws.com/sfdc-demo/realty/house07.jpg",
        thumbnail: "https://s3-us-west-1.amazonaws.com/sfdc-demo/realty/house07sq.jpg",
        tags: "colonial",
        description: "Lorem ipsum dolor sit amet",
        broker: {
            id: 6,
            name: "Miriam Aupont",
            title: "Senior Broker",
            picture: "https://s3-us-west-1.amazonaws.com/sfdc-demo/people/miriam_aupont.jpg"
        }
    },
    {
        id: 8,
        address: "48 Brattle st",
        city: "Cambridge",
        state: "MA",
        zip: "02420",
        price: "$450,000",
        title: "Heart of Harvard Square",
        bedrooms: 5,
        bathrooms: 4,
        long: -71.121653,
        lat: 42.374117,
        picture: "https://s3-us-west-1.amazonaws.com/sfdc-demo/realty/house10.jpg",
        thumbnail: "https://s3-us-west-1.amazonaws.com/sfdc-demo/realty/house10sq.jpg",
        tags: "victorian",
        description: "Lorem ipsum dolor sit amet",
        broker: {
            id: 7,
            name: "Michelle Lambert",
            title: "Senior Broker",
            picture: "https://s3-us-west-1.amazonaws.com/sfdc-demo/people/michelle_lambert.jpg"
        }
    },
    {
        id: 9,
        address: "121 Harborwalk",
        city: "Boston",
        state: "MA",
        zip: "02420",
        price: "$450,000",
        title: "Seaport District Retreat",
        bedrooms: 3,
        bathrooms: 3,
        long: -71.049327,
        lat: 42.35695,
        picture: "https://s3-us-west-1.amazonaws.com/sfdc-demo/realty/house09.jpg",
        thumbnail: "https://s3-us-west-1.amazonaws.com/sfdc-demo/realty/house09sq.jpg",
        tags: "contemporary",
        description: "Lorem ipsum dolor sit amet",
        broker: {
            id: 2,
            name: "Michael Jones",
            title: "Senior Broker",
            picture: "https://s3-us-west-1.amazonaws.com/sfdc-demo/people/michael_jones.jpg"
        }
    },
    {
        id: 10,
        address: "503 Park Drive",
        city: "Boston",
        state: "MA",
        zip: "02420",
        price: "$650,000",
        title: "City Living",
        bedrooms: 2,
        bathrooms: 2,
        long: -71.105475,
        lat: 42.347400,
        picture: "https://s3-us-west-1.amazonaws.com/sfdc-demo/realty/house08.jpg",
        thumbnail: "https://s3-us-west-1.amazonaws.com/sfdc-demo/realty/house08sq.jpg",
        tags: "contemporary",
        description: "Lorem ipsum dolor sit amet",
        broker: {
            id: 1,
            name: "Caroline Kingsley",
            title: "Senior Broker",
            picture: "https://s3-us-west-1.amazonaws.com/sfdc-demo/people/caroline_kingsley.jpg"
        }
    },
    {
        id: 11,
        address: "95 Gloucester st",
        city: "Boston",
        state: "MA",
        zip: "02420",
        price: "$690,000",
        title: "Architectural Details",
        bedrooms: 3,
        bathrooms: 3,
        lat: 42.349693,
        long: -71.084407,
        picture: "https://s3-us-west-1.amazonaws.com/sfdc-demo/realty/house11.jpg",
        thumbnail: "https://s3-us-west-1.amazonaws.com/sfdc-demo/realty/house11sq.jpg",
        tags: "contemporary",
        description: "Lorem ipsum dolor sit amet",
        broker: {
            id: 4,
            name: "Jennifer Wu",
            title: "Senior Broker",
            picture: "https://s3-us-west-1.amazonaws.com/sfdc-demo/people/jennifer_wu.jpg"
        }
    },
    {
        id: 12,
        address: "145 Commonwealth ave",
        city: "Boston",
        state: "MA",
        zip: "02420",
        price: "$845,000",
        title: "Contemporary Luxury",
        bedrooms: 4,
        bathrooms: 3,
        lat: 42.352466,
        long: -71.075311,
        picture: "https://s3-us-west-1.amazonaws.com/sfdc-demo/realty/house12.jpg",
        thumbnail: "https://s3-us-west-1.amazonaws.com/sfdc-demo/realty/house12sq.jpg",
        tags: "colonial",
        description: "Lorem ipsum dolor sit amet",
        broker: {
            id: 5,
            name: "Olivia Green",
            title: "Senior Broker",
            picture: "https://s3-us-west-1.amazonaws.com/sfdc-demo/people/olivia_green.jpg"
        }
    }
];
/* harmony default export */ __webpack_exports__["a"] = (properties);
//# sourceMappingURL=mock-properties.js.map

/***/ }),

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var brokers = [
    {
        id: 1,
        name: "Caroline Kingsley",
        title: "Senior Broker",
        phone: "617-244-3672",
        mobilePhone: "617-244-3672",
        email: "caroline@ionicrealty.com",
        picture: "https://s3-us-west-1.amazonaws.com/sfdc-demo/people/caroline_kingsley.jpg"
    },
    {
        id: 2,
        name: "Michael Jones",
        title: "Senior Broker",
        phone: "617-244-3672",
        mobilePhone: "617-244-3672",
        email: "michael@ionicrealty.com",
        picture: "https://s3-us-west-1.amazonaws.com/sfdc-demo/people/michael_jones.jpg"
    },
    {
        id: 3,
        name: "Jonathan Bradley",
        title: "Senior Broker",
        phone: "617-244-3672",
        mobilePhone: "617-244-3672",
        email: "jonathan@ionicrealty.com",
        picture: "https://s3-us-west-1.amazonaws.com/sfdc-demo/people/jonathan_bradley.jpg"
    },
    {
        id: 4,
        name: "Jennifer Wu",
        title: "Senior Broker",
        phone: "617-244-3672",
        mobilePhone: "617-244-3672",
        email: "jen@ionicrealty.com",
        picture: "https://s3-us-west-1.amazonaws.com/sfdc-demo/people/jennifer_wu.jpg"
    },
    {
        id: 5,
        name: "Olivia Green",
        title: "Senior Broker",
        phone: "617-244-3672",
        mobilePhone: "617-244-3672",
        email: "olivia@ionicrealty.com",
        picture: "https://s3-us-west-1.amazonaws.com/sfdc-demo/people/olivia_green.jpg"
    },
    {
        id: 6,
        name: "Miriam Aupont",
        title: "Senior Broker",
        phone: "617-244-3672",
        mobilePhone: "617-244-3672",
        email: "miriam@ionicrealty.com",
        picture: "https://s3-us-west-1.amazonaws.com/sfdc-demo/people/miriam_aupont.jpg"
    },
    {
        id: 7,
        name: "Michelle Lambert",
        title: "Senior Broker",
        phone: "617-244-3672",
        mobilePhone: "617-244-3672",
        email: "michelle@ionicrealty.com",
        picture: "https://s3-us-west-1.amazonaws.com/sfdc-demo/people/michelle_lambert.jpg"
    },
    {
        id: 8,
        name: "Victor Ochoa",
        title: "Senior Broker",
        phone: "617-244-3672",
        mobilePhone: "617-244-3672",
        email: "victor@ionicrealty.com",
        picture: "https://s3-us-west-1.amazonaws.com/sfdc-demo/people/victor_ochoa.jpg"
    }
];
/* harmony default export */ __webpack_exports__["a"] = (brokers);
//# sourceMappingURL=mock-brokers.js.map

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PropertyService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mock_properties__ = __webpack_require__(284);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var PropertyService = (function () {
    function PropertyService() {
        this.favoriteCounter = 0;
        this.favorites = [];
        this.myProperties = [];
    }
    PropertyService.prototype.findAll = function () {
        return Promise.resolve(__WEBPACK_IMPORTED_MODULE_1__mock_properties__["a" /* default */]);
    };
    PropertyService.prototype.findById = function (id) {
        return Promise.resolve(__WEBPACK_IMPORTED_MODULE_1__mock_properties__["a" /* default */][id - 1]);
    };
    PropertyService.prototype.findByName = function (searchKey) {
        var key = searchKey.toUpperCase();
        return Promise.resolve(__WEBPACK_IMPORTED_MODULE_1__mock_properties__["a" /* default */].filter(function (property) {
            return (property.title + ' ' + property.address + ' ' + property.city + ' ' + property.description).toUpperCase().indexOf(key) > -1;
        }));
    };
    ///////////////////////
    // Handling Favorites
    ///////////////////////
    PropertyService.prototype.getFavorites = function () {
        return Promise.resolve(this.favorites);
    };
    PropertyService.prototype.favorite = function (property) {
        this.favoriteCounter = this.favoriteCounter + 1;
        this.favorites.push({ id: this.favoriteCounter, property: property });
        return Promise.resolve();
    };
    PropertyService.prototype.unfavorite = function (favorite) {
        var index = this.favorites.indexOf(favorite);
        if (index > -1) {
            this.favorites.splice(index, 1);
        }
        return Promise.resolve();
    };
    PropertyService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], PropertyService);
    return PropertyService;
}());

//# sourceMappingURL=property-service-mock.js.map

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JsonStoreProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var JsonStoreProvider = (function () {
    function JsonStoreProvider() {
    }
    JsonStoreProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], JsonStoreProvider);
    return JsonStoreProvider;
}());

//# sourceMappingURL=json-store.js.map

/***/ })

},[207]);
//# sourceMappingURL=main.js.map
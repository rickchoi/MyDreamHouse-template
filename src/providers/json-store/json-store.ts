import { Injectable } from '@angular/core';

@Injectable()
export class JsonStoreProvider {
/*
  collectionName = 'favorites';
  collections = {}

  initJsonStore() {
    this.collections[this.collectionName] = {};
    this.collections[this.collectionName].searchFields = {
      id: 'integer',
      title: 'string',
      thumbnail: 'string',
      city: 'string',
      state: 'string',
      price: 'integer'
    };

    WL.JSONStore.init(this.collections, null).then(() => {
      console.log('--> Collection Initialized Successfuly');
    })
    .fail(errorObject => {
        console.log('--> JSONStore init failed.'+ JSON.stringify(errorObject));
        alert('JSONStore init failed.'+ JSON.stringify(errorObject));
    });
  }

  saveFavorite(property: any) {
    let data = {
      id: property.id,
      title: property.title,
      thumbnail: property.thumbnail,
      city: property.city,
      state: property.state,
      price: property.price
    };

    return new Promise((resolve, reject) => {
      WL.JSONStore.get(this.collectionName).add(data, null).then(res => {
        console.log('--> A new document is added successfully.');
        resolve(res);
      }).fail(errorObject => {
        alert('Failed to Add Data: ' + errorObject.msg);  
        reject(errorObject.msg);
      }); 
    });
  }

  getFavorites() {
    return new Promise<Array<any>>((resolve, reject) => {
      WL.JSONStore.get(this.collectionName).findAll(null).then(res => {                      
        resolve(res);
      }).fail(errorObject => {
          alert('Failed to getFavorites: ' + errorObject.msg);
          reject(errorObject.msg);
      });
    });
  }

  findByID(property: any): any {
    let query = { id: property.id };
    let options = { exact: true }; 
    return new Promise((resolve, reject) => {
      WL.JSONStore.get(this.collectionName).find(query, options).then(res => {
          resolve(res.length);
      }).fail(errorObject => {
          console.log(errorObject.msg);
          reject(errorObject.msg);
      });
    });
  }

  deleteFavorite(favorite: any) {
    var query = { _id: favorite._id };
    var options = { exact: true };
    return new Promise((resolve, reject) => {
	    WL.JSONStore.get(this.collectionName).remove(query, options).then(res => {
          resolve(res);
      }).fail(function (errorObject) {
          console.log(errorObject.msg);
          reject(errorObject.msg);
      });
    });
  }
  */
}

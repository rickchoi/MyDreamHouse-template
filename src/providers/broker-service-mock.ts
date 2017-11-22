import {Injectable} from '@angular/core';
import brokers from './mock-brokers';

@Injectable()
export class BrokerService {

    myBrokers: Array<any> = [];

    findAll() {
        return Promise.resolve(brokers);
        
    }

    findById(id) {
        return Promise.resolve(brokers[id - 1]);
    }

}

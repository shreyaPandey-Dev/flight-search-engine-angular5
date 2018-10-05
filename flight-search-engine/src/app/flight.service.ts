import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class FlightService {
    formOpenedValue: any;
    formOpenedVal: Observable < any >;
    private formOpenedSubject = new BehaviorSubject('');

    getSearchResultVal: Observable < any >;
    getSearchResultsSubject = new BehaviorSubject('');
    configUrl = './../assets/Data/flightData.json';

    populateContentHeaderSubject = new BehaviorSubject('');

    depDateVal: Observable < any >;
    originVal: Observable < any >;
    destinationVal: Observable < any >;
    returnVal: Observable < any >;
    populatedepDateSubject = new BehaviorSubject('');
    populateoriginSubject = new BehaviorSubject('');
    populatedestinationSubject = new BehaviorSubject('');
    populatereturnSubject = new BehaviorSubject('');
    contentHeader = [];
    depDate: any;
    origin: any;
    destination: any;
    returnDate: any;

    constructor(private http: HttpClient) {
        this.formOpenedVal = this
            .formOpenedSubject
            .asObservable();
        this.getSearchResultVal = this
            .getSearchResultsSubject
            .asObservable();
        this.depDateVal = this
            .populatedepDateSubject
            .asObservable();
        this.originVal = this
            .populateoriginSubject
            .asObservable();
        this.destinationVal = this
            .populatedestinationSubject
            .asObservable();
        this.returnVal = this
            .populatereturnSubject
            .asObservable();
    }

    formOpened(oneWayFormOpened: any) {
        this
            .formOpenedSubject
            .next(oneWayFormOpened);
    }

    public getJSON(): Observable < any > {
        return this
            .http
            .get(this.configUrl)
            .catch(this.handleError);
    }

    private handleError(error: any): Promise < any > {
        return Promise.reject(error.message || error);
    }

    getSearchResults(searchResult: any): any {
        this
            .getSearchResultsSubject
            .next(searchResult);
    }

    populateReturn(depDate: any, origin: any, destination: any, returnDate: any) {
        this.depDate = depDate;
        this.origin = origin;
        this.destination = destination;
        this.returnDate = returnDate;
        this
            .populatedepDateSubject
            .next(this.depDate);
        this
            .populateoriginSubject
            .next(this.origin);
        this
            .populatedestinationSubject
            .next(this.destination);
        this
            .populatereturnSubject
            .next(this.returnDate);
    }
    populateContentHeader(depDate: any, origin: any, destination: any): any {
        this.depDate = depDate;
        this.origin = origin;
        this.destination = destination;

        this
            .populatedepDateSubject
            .next(this.depDate);
        this
            .populateoriginSubject
            .next(this.origin);

        this
            .populatedestinationSubject
            .next(this.destination);
    }

}

import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms';
import {FlightService} from '../flight.service';
@Component({selector: 'app-one-way-form', templateUrl: './one-way-form.component.html', styleUrls: ['./one-way-form.component.css']})
export class OneWayFormComponent implements OnInit {
    passengers: any;
    form: FormGroup;
    origin: any;
    destination: any;
    depDate: any;
    price: any;
    todayDate: Date;
    flights: any;
    flightRow: any;
    searchResult: any = [];
  message: string;


    constructor(private fb: FormBuilder, private flightservice: FlightService) {
        this.form = fb.group({
            origin: [this.origin],
            destination: [this.destination],
            passengers: [this.passengers],
            depDate: [this.depDate],
            price: [this.price]
        });
    }

    ngOnInit() {
      this.price = 10000;
    }
    oneWaySearch() {

      console.log('price=', this.price);
        this
            .flightservice
            .getJSON()
            .subscribe(data => this.searchFlightData(data));
        this
            .flightservice
            .populateContentHeader(this.depDate, this.origin, this.destination);

    }

    searchFlightData(data: any): any {
        // tslint:disable-next-line:forin
        for (const flightDetails in data) {
            // getting all 7 rows here
            console.log('value', data[flightDetails]);
            this.flights = data[flightDetails];
            // tslint:disable-next-line:forin
            for (const flight in this.flights) {
                this.flightRow = data[flightDetails][flight];
                // tslint:disable-next-line:forin
                for (const flights in this.flightRow) {
                    this.flights = flights;

                    if (this.origin === this.flightRow.from &&
                      this.destination === this.flightRow.to &&
                      this.flightRow.cost <= this.price) {
                        this
                            .searchResult
                            .push(this.flightRow[flights]);
                            this.message = 'Flights Found!';
                    }
                }
            }
        }
               this
            .flightservice
            .getSearchResults(this.searchResult);

    }
}

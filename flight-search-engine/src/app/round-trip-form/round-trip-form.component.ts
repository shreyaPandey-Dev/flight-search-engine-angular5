import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms';
import {FlightService} from '../flight.service';

@Component({selector: 'app-round-trip-form',
 templateUrl: './round-trip-form.component.html',
 styleUrls: ['./round-trip-form.component.css']})
export class RoundTripFormComponent implements OnInit {
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
    returnDate: any;

    constructor(private fb: FormBuilder, private flightservice: FlightService) {
        this.form = fb.group({
            origin: [this.origin],
            destination: [this.destination],
            passengers: [this.passengers],
            depDate: [this.depDate],
            price: [this.price],
            returnDate: [this.returnDate]

        });
    }

    ngOnInit() {
        this.price = 10000;
    }
    roundTripSearch() {

        this
            .flightservice
            .getJSON()
            .subscribe(data => this.searchFlightData(data));
        this
            .flightservice
            .populateReturn(this.depDate, this.origin, this.destination, this.returnDate);

    }

    searchFlightData(data: any): any {
        // tslint:disable-next-line:forin
        for (const flightDetails in data) {
            // getting all 7 rows here
            this.flights = data[flightDetails];
            // tslint:disable-next-line:forin
            for (const flight in this.flights) {
                this.flightRow = data[flightDetails][flight];
                // tslint:disable-next-line:forin
                for (const flights in this.flightRow) {
                    this.flights = flights;

                    // tslint:disable-next-line:max-line-length
                    if (this.origin === this.flightRow.from && this.destination === this.flightRow.to && this.flightRow.cost <= this.price) {
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

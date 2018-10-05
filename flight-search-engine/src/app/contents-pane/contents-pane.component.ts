import {Component, OnInit} from '@angular/core';
import {FlightService} from '../flight.service';
@Component({selector: 'app-contents-pane', templateUrl: './contents-pane.component.html', styleUrls: ['./contents-pane.component.css']})
export class ContentsPaneComponent implements OnInit {

    flightRow: any;
    flight_number: any;
    from: any;
    to: any;
    departure: any;
    arrival: any;
    duration: any;
    cost: any;
    logo: any;
    day: any;
    flights: any = [];
    formOpened: any;
    data: any;
    selectedTab: any;
  searchResult: any;
  loading: boolean;
  headerdepDate: any;
  headerOrigin: any;
  headerDestination: any;
  headerReturnDate: any;
  showHome: boolean;
    constructor(private flightservice: FlightService) {
        this
            .flightservice
            .formOpenedVal
            .subscribe((data) => {
                this.selectedTab = data;
            });

        this
        .flightservice
        .getSearchResultVal
        .subscribe(data => this.showResults(data));
    }


    ngOnInit() {
        this.loading = true;
        this.showHome = false;
        this
        .flightservice
        .depDateVal
        .subscribe(data => this.headerdepDate = data);
        this
        .flightservice
        .originVal
        .subscribe(data => this.headerOrigin = data);
        this
        .flightservice
        .destinationVal
        .subscribe(data => this.headerDestination = data);
        this
        .flightservice
        .returnVal
        .subscribe(data => this.headerReturnDate = data);

    }

    showResults(searchResult: any): any {
      this.loading = false;
     this.flights = searchResult ;
      // tslint:disable-next-line:forin
      for (const each in this.flights) {
        console.log('each ', this.flights[each]);
      }

    }


}

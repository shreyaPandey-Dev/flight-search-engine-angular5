import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {MatTabChangeEvent} from '@angular/material';
import {FlightService} from '../flight.service';

@Component({selector: 'app-left-pane', templateUrl: './left-pane.component.html', styleUrls: ['./left-pane.component.css']})
export class LeftPaneComponent implements OnInit {
    selectedTab = 0;
    tabChangeEvent: MatTabChangeEvent;

    constructor(private flightservice: FlightService) {
        this
            .flightservice
            .formOpened(this.selectedTab);
    }
    ngOnInit() {
       }

    public tabChanged(tabChangeEvent: MatTabChangeEvent): void {
        this.selectedTab = tabChangeEvent.index;
        this.selectedTab = tabChangeEvent.index;
        this
            .flightservice
            .formOpened(this.selectedTab);
    }

}

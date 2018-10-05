import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MyMaterialModule } from './my-material/my-material.module';

import { AppComponent } from './app.component';
import { TopnavComponent } from './topnav/topnav.component';
import { LeftPaneComponent } from './left-pane/left-pane.component';
import { ContentsPaneComponent } from './contents-pane/contents-pane.component';
import {ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {FlightService} from './flight.service';
import { OneWayFormComponent } from './one-way-form/one-way-form.component';
import { RoundTripFormComponent } from './round-trip-form/round-trip-form.component';
@NgModule({
  declarations: [
    AppComponent,
    TopnavComponent,
    LeftPaneComponent,
    ContentsPaneComponent,
    OneWayFormComponent,
    RoundTripFormComponent
  ],
  imports: [
    BrowserModule,
    MyMaterialModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports: [
    BrowserModule,
    MyMaterialModule,
    ReactiveFormsModule
  ],
  providers: [FlightService],
  bootstrap: [AppComponent]
})
export class AppModule { }

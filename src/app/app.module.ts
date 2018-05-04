import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

import { AppComponent } from './app.component';
import {AppRoutingModule} from "./app-routing.module";
import {AboutComponent} from "./about.component";
import {SharedModule} from "./shared/shared.module";
import {CarPartModule} from "./cat-part/car-part.module";
import {RacesModule} from "./races/races.module";



@NgModule({
  declarations: [
    AppComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,FormsModule,HttpClientModule,AppRoutingModule,SharedModule,CarPartModule,RacesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

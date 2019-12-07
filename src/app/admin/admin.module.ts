import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import {GoogleMapsModule} from "../google-maps/google-maps.module";
import {HeaderModule} from "../header/header.module";
import { GeocodingComponent } from './components/geocoding/geocoding.component';
import {FormsModule} from "@angular/forms";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";


@NgModule({
  declarations: [AdminComponent, GeocodingComponent],
  imports: [
    FormsModule,
    CommonModule,
    AdminRoutingModule,
    GoogleMapsModule,
    HeaderModule,
    NgbModule
  ]
})
export class AdminModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import {GoogleMapsModule} from "../google-maps/google-maps.module";
import {HeaderModule} from "../header/header.module";
import { GeocodingComponent } from './components/geocoding/geocoding.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import { ImageCropperComponent } from './components/image-cropper/image-cropper.component';
import {ImageCropperModule} from "ngx-image-cropper";
import { StepperComponent } from './components/stepper/stepper.component';
import { PlaceDetailsComponent } from './components/place-details/place-details.component';
import { PlaceLocationComponent } from './components/place-location/place-location.component';
import {PlacesModule} from "../places/places.module";


@NgModule({
  declarations: [AdminComponent, GeocodingComponent, ImageCropperComponent, StepperComponent, PlaceDetailsComponent, PlaceLocationComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    AdminRoutingModule,
    GoogleMapsModule,
    HeaderModule,
    NgbModule,
    ImageCropperModule,
    PlacesModule
  ]
})
export class AdminModule { }

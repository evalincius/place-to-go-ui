import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GoogleMapsRoutingModule } from './google-maps-routing.module';
import { GoogleMapsComponent } from './google-maps.component';
import {SharedModule} from "../shared/shared.module";

@NgModule({
  declarations: [GoogleMapsComponent],
  imports: [
    CommonModule,
    SharedModule,
    GoogleMapsRoutingModule
  ],
  exports: [
    GoogleMapsComponent
  ]
})
export class GoogleMapsModule { }

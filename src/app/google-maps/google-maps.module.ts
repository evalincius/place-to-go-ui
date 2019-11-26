import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GoogleMapsRoutingModule } from './google-maps-routing.module';
import { GoogleMapsComponent } from './google-maps.component';

@NgModule({
  declarations: [GoogleMapsComponent],
  imports: [
    CommonModule,
    GoogleMapsRoutingModule
  ],
  exports: [
    GoogleMapsComponent
  ]
})
export class GoogleMapsModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { PlaygroundComponent } from './components/playground/playground.component';
import {GeoChartsModule} from "../geo-charts/geo-charts.module";
import {GoogleMapsModule} from "../google-maps/google-maps.module";


@NgModule({
  declarations: [PlaygroundComponent],
  imports: [
    CommonModule,
    SharedRoutingModule,
    GeoChartsModule,
    GoogleMapsModule
  ]
})
export class SharedModule { }

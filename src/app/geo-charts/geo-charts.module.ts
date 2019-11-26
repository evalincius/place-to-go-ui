import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GeoChartsRoutingModule } from './geo-charts-routing.module';
import { GeoChartsComponent } from './geo-charts.component';
import {Ng2GoogleChartsModule} from "ng2-google-charts";


@NgModule({
  declarations: [GeoChartsComponent],
  imports: [
    CommonModule,
    Ng2GoogleChartsModule,
    GeoChartsRoutingModule
  ],
  exports: [
    GeoChartsComponent
  ]
})
export class GeoChartsModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {GeoChartsComponent} from "./geo-charts.component";


const routes: Routes = [
  {path: '', component: GeoChartsComponent}
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GeoChartsRoutingModule { }

import {Ng2GoogleChartsModule } from 'ng2-google-charts';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HeaderModule } from '../header/header.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { CarouselComponent } from './components/carousel/carousel.component';
import { CardsComponent } from './components/cards/cards.component';
import { GeoChartsModule } from "../geo-charts/geo-charts.module";


@NgModule({
  declarations: [HomeComponent, CarouselComponent, CardsComponent],
  imports: [
    HeaderModule,
    CommonModule,
    HomeRoutingModule,
    Ng2GoogleChartsModule,
    HeaderModule,
    NgbModule,
    FormsModule,
    GeoChartsModule
  ],
  providers: [
  ]
})
export class HomeModule { }

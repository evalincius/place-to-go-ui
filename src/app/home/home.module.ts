import {Ng2GoogleChartsModule } from 'ng2-google-charts';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HeaderModule } from '../header/header.module';
import { MapComponent } from './components/map/map.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { CarouselComponent } from './components/carousel/carousel.component';


@NgModule({
  declarations: [HomeComponent, MapComponent, CarouselComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    Ng2GoogleChartsModule,
    HeaderModule,
    NgbModule,
    FormsModule
  ],
  providers: [
    // {provide: 'googleChartsVersion', useValue: '46'},
    {provide: 'mapsApiKey', useValue: 'AIzaSyAKUdPxI9HXqpLi0aPXrijOPzJ9Nzg1Hro'}
  ]
})
export class HomeModule { }

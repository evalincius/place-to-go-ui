import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlacesContainerRoutingModule } from './places-container-routing.module';
import { PlacesContainerComponent } from './places-container.component';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {CardComponent} from "./components/card/card.component";
import {FilterComponent} from "./components/filter-container/filter.component";
import {FormsModule} from "@angular/forms";
import { CountryFilterComponent } from './components/filter-container/filters/country-filter/country-filter.component';
import { RatingFilterComponent } from './components/filter-container/filters/rating-filter/rating-filter.component';


@NgModule({
  declarations: [PlacesContainerComponent, CardComponent, FilterComponent, CountryFilterComponent, RatingFilterComponent],
  imports: [
    NgbModule,
    CommonModule,
    FormsModule,
    PlacesContainerRoutingModule
  ]
})
export class PlacesContainerModule {



}

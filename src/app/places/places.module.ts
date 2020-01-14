import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlacesRoutingModule } from './places-routing.module';
import { PlacesComponent } from './places.component';
import { FormsModule } from "@angular/forms";
import { CardComponent } from './components/card/card.component';
import { CardsContainerComponent } from "./components/cards-container/cards-container.component";
import {HeaderModule} from "../header/header.module";
import { FilterComponent } from './components/filter/filter.component';
import {NgbCollapseModule, NgbRatingModule} from "@ng-bootstrap/ng-bootstrap";


@NgModule({
  declarations: [PlacesComponent, CardsContainerComponent, CardComponent, FilterComponent],
  imports: [
    FormsModule,
    CommonModule,
    HeaderModule,
    PlacesRoutingModule,
    NgbCollapseModule,
    NgbRatingModule
  ],
  exports: [CardComponent]
})
export class PlacesModule { }

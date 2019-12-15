import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlacesRoutingModule } from './places-routing.module';
import { PlacesComponent } from './places.component';
import { FormsModule } from "@angular/forms";
import { CardComponent } from './components/card/card.component';
import { CardsContainerComponent } from "./components/cards-container/cards-container.component";


@NgModule({
  declarations: [PlacesComponent, CardsContainerComponent, CardComponent],
  imports: [
    FormsModule,
    CommonModule,
    PlacesRoutingModule
  ]
})
export class PlacesModule { }

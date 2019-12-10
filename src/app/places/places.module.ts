import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlacesRoutingModule } from './places-routing.module';
import { PlacesComponent } from './places.component';
import { FormsModule } from "@angular/forms";
import { CardsComponent } from './components/cards/cards.component';


@NgModule({
  declarations: [PlacesComponent, CardsComponent],
  imports: [
    FormsModule,
    CommonModule,
    PlacesRoutingModule
  ]
})
export class PlacesModule { }

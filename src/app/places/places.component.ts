import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {CountryCode} from "../shared/model/country-code";
import {PlaceService} from "./service/place.service";

@Component({
  selector: 'p2g-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.scss'],
  providers: [PlaceService]
})
export class PlacesComponent implements OnInit {

  places: Place[];
  constructor(private placeService: PlaceService) { }

  ngOnInit() {
  }

  onFindPlace(form: NgForm) {
    let countryCode: CountryCode = form.controls.country.value;
    let city: string = form.controls.city.value;
    this.placeService.getPlaces(countryCode, city).subscribe(places => this.places = places);
  }
}

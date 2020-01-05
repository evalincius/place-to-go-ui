import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {CountryCode} from "../shared/model/country-code";
import {PlaceService} from "./service/place.service";
import {CountryService} from "../admin/service/country.service";

@Component({
  selector: 'p2g-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.scss'],
  providers: [PlaceService, CountryService]
})
export class PlacesComponent implements OnInit {
  places: Place[];
  availableCountries: Country[];
  countryPlaceholder: Country;
  constructor(private placeService: PlaceService, private countryService: CountryService) { }

  ngOnInit() {
    this.placeService.getAllPlaces().subscribe(places => this.places = places);
    this.loadAvailableCountries();
  }

  onFindPlace(form: NgForm) {
    let countryCode: CountryCode = form.controls.country.value;
    console.log(form.controls.country);
    let city: string = form.controls.city.value;
    this.placeService.getPlaces(countryCode, city).subscribe(places => this.places = places);
  }

  private loadAvailableCountries() {
    this.countryService.getCountrySummaries().subscribe(countries => this.availableCountries = countries);
  }
}

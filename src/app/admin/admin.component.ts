import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {PlaceService} from "./service/place.service";
import {CountryService} from "./service/country.service";

@Component({
  selector: 'p2g-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
  providers: [PlaceService, CountryService]
})
export class AdminComponent implements OnInit {
  isCollapsed = true;
  constructor(private placeService: PlaceService, private countryService: CountryService) { }
  availableCountries: Country[];
  coordinates: Coords;
  ngOnInit() {
    this.loadAvailableCountries();
    this.coordinates = {
      lat: undefined,
      lng: undefined
    };
  }

  createNewLocation(form: NgForm) {
    const name = form.form.controls.name.value;
    const countryCode = form.form.controls.country.value;
    const city = form.form.controls.city.value;
    const lat = form.form.controls.lat.value;
    const lng = form.form.controls.lng.value;

    const place: Place = {
      name: name,
      city: city,
      countryCode: countryCode,
      coordinates: {lat: lat, lng: lng}
    }

    this.placeService.createPlace(place).subscribe(key => form.reset());
  }

  onGeocodeToggled(marker: google.maps.Marker) {
    if(marker) {
      console.log(marker.getPosition());
      this.coordinates.lat = marker.getPosition().lat();
      this.coordinates.lng = marker.getPosition().lng();
    } else {
      this.isCollapsed = true;
    }
  }

  private loadAvailableCountries() {
    this.countryService.getCountrySummaries().subscribe(countries => this.availableCountries = countries);
  }
}

import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {PlaceService} from "./service/place.service";
import {CountryService} from "./service/country.service";
import GeocoderResult = google.maps.GeocoderResult;
import LatLng = google.maps.LatLng;

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
  address: string;
  ngOnInit() {
    this.loadAvailableCountries();
    this.coordinates = {
      lat: undefined,
      lng: undefined
    };
    this.address = '';
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
      coordinates: {lat: lat, lng: lng},
      address: this.address
    }

    this.placeService.createPlace(place).subscribe(key => form.reset());
  }

  onGeocodeToggled(geocoderResult: GeocoderResult) {
    if(geocoderResult) {
      const latLang: LatLng = geocoderResult.geometry.location;
      this.coordinates.lat = latLang.lat();
      this.coordinates.lng = latLang.lng();
      this.address = geocoderResult.formatted_address;
    } else {
      this.isCollapsed = true;
    }
  }

  private loadAvailableCountries() {
    this.countryService.getCountrySummaries().subscribe(countries => this.availableCountries = countries);
  }
}

import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {CountryService} from "../../service/country.service";
import LatLng = google.maps.LatLng;
import GeocoderResult = google.maps.GeocoderResult;
import {FormBuilder, FormGroup, NgForm} from "@angular/forms";

@Component({
  selector: 'p2g-place-location',
  templateUrl: './place-location.component.html',
  styleUrls: ['./place-location.component.scss']
})
export class PlaceLocationComponent implements OnInit {
  @Output() formReady = new EventEmitter<FormGroup>()
  isCollapsed = true;
  availableCountries: Country[];
  coordinates: Coords;
  address: string;
  placeLocationForm: FormGroup;

  constructor(private fb: FormBuilder, private countryService: CountryService) {}

  ngOnInit() {
    this.loadAvailableCountries();
    this.coordinates = {
      lat: undefined,
      lng: undefined
    };
    this.address = '';
    this.placeLocationForm = this.fb.group({
      countryCode: null,
      city: null,
      coordinates: null,
      address: null
    });

    // Emit the form group to the father to do whatever it wishes
    this.formReady.emit(this.placeLocationForm);
  }

  onGeocodeToggled(geocoderResult: GeocoderResult) {
    if(geocoderResult) {
      const latLang: LatLng = geocoderResult.geometry.location;
      this.coordinates.lat = latLang.lat();
      this.coordinates.lng = latLang.lng();
      this.address = geocoderResult.formatted_address;

      const updated = Object.assign(this.placeLocationForm.value, {
          coordinates: this.coordinates,
          address: this.address
        });
      this.placeLocationForm.setValue(updated)
    } else {
      this.isCollapsed = true;
    }
  }

  // saveLocation(form: NgForm) {
  //   const countryCode = form.form.controls.country.value;
  //   const city = form.form.controls.city.value;
  //   const lat = form.form.controls.lat.value;
  //   const lng = form.form.controls.lng.value;
  //
  //   const place: PlaceLocation = {
  //     city: city,
  //     countryCode: countryCode,
  //     coordinates: {lat: lat, lng: lng},
  //     address: this.address
  //   }
  // }

  private loadAvailableCountries() {
    this.countryService.getCountrySummaries().subscribe(countries => this.availableCountries = countries);
  }

}

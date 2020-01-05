import {Component, OnInit} from '@angular/core';
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
  constructor() {
  }

  ngOnInit() {
  }
}

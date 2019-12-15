import {AfterViewInit, Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {MapStyleConfig} from "../../../shared/service/map-style-config";
import {CountryCode} from "../../../shared/model/country-code";
import StyledMapType = google.maps.StyledMapType;
import MapOptions = google.maps.MapOptions;
import LatLng = google.maps.LatLng;
import GeocoderResult = google.maps.GeocoderResult;

@Component({
  selector: 'p2g-geocoding',
  templateUrl: './geocoding.component.html',
  styleUrls: ['./geocoding.component.scss']
})
export class GeocodingComponent implements OnInit, AfterViewInit {
  @Output() geocodingTriggered = new EventEmitter<GeocoderResult>();

  constructor(private mapStyleConfig: MapStyleConfig) { }

  @ViewChild('mapContainer', {static: false}) gmap: ElementRef;
  map : google.maps.Map;
  geocoder : google.maps.Geocoder;
  address: string;
  lng = 23.5040363225;
  lat = 53.9470452478;
  coordinates: LatLng;
  mapOptions: MapOptions;
  styledMapType: StyledMapType;
  ngOnInit() {
    this.styledMapType = new google.maps.StyledMapType(
      this.mapStyleConfig.get(),
      {name: 'Styled Map'});

    this.coordinates = new google.maps.LatLng(this.lat, this.lng);

    this.mapOptions = {
      center: this.coordinates,
      zoom: 6,
      mapTypeControlOptions: {
        mapTypeIds: ['roadmap', 'satellite', 'hybrid', 'terrain',
          'styled_map']
      }
    };
    console.log(CountryCode.LT);
  }
  ngAfterViewInit() {
    this.mapInitializer();
  }

  mapInitializer() {
    this.map = new google.maps.Map(this.gmap.nativeElement,
      this.mapOptions);
    this.geocoder = new google.maps.Geocoder();
    //Associate the styled map with the MapTypeId and set it to display.
    this.map.mapTypes.set('styled_map', this.styledMapType);
    this.map.setMapTypeId('styled_map');
  }

  onSearchGeolocationClicked() {
    this.geocodeAddress(this.geocoder, this.map);
  }

  private geocodeAddress(geocoder, resultsMap) {
        geocoder.geocode({'address': this.address}, (results, status) => {
      if (status === 'OK') {
        resultsMap.setCenter(results[0].geometry.location);
        resultsMap.setZoom(16);
        const marker = new google.maps.Marker({
          map: resultsMap,
          position: results[0].geometry.location
        });

        this.geocodingTriggered.emit(results[0]);
      } else {
        alert('Geocode was not successful for the following reason: ' + status);
      }
    });
  }

  close() {
    this.geocodingTriggered.emit();
  }
}

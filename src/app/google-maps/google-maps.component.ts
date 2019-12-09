/// <reference types="@types/googlemaps" />
import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {MapStyleConfig} from "../shared/service/map-style-config";
import StyledMapType = google.maps.StyledMapType;
import MapOptions = google.maps.MapOptions;
import LatLng = google.maps.LatLng;
import Marker = google.maps.Marker;
import {MapsService} from "./service/maps.service";
import {CountryCode} from "../shared/model/country-code";
@Component({
  selector: 'p2g-google-maps',
  templateUrl: './google-maps.component.html',
  styleUrls: ['./google-maps.component.scss']
})
export class GoogleMapsComponent implements OnInit, AfterViewInit {

  constructor(private mapStyleConfig: MapStyleConfig, private mapsService: MapsService) { }

  @ViewChild('mapContainer', {static: false}) gmap: ElementRef;
  map : google.maps.Map;

  lng = 23.5040363225;
  lat = 53.9470452478;
  coordinates: LatLng;
  mapOptions: MapOptions;
  styledMapType: StyledMapType;
  marker: Marker;
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
    this.mapsService.getCountry(CountryCode.LT).subscribe(country => {
      this.bucaramangaDelimiters = country.coordinates
      this.polygoninitializer();
    });
  }

  // An array with the coordinates of the boundaries of Bucaramanga, extracted manually from the GADM database
  bucaramangaDelimiters: Coords[];

  ngAfterViewInit() {
    this.mapInitializer();
    this.markersInitializer();
  }

  markersInitializer() {
    const image = 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png';

    this.marker = new google.maps.Marker({
      position: this.coordinates,
      icon: image,
      title: 'Hello World!'
    });
    this.marker.setMap(this.map);
    console.log(this.marker.getAnimation() !== null);
    this.marker.addListener('click', (marker, event) =>this.toggleBounce(marker, event));

  }

  mapInitializer() {
    this.map = new google.maps.Map(this.gmap.nativeElement,
      this.mapOptions);
    //Associate the styled map with the MapTypeId and set it to display.
    this.map.mapTypes.set('styled_map', this.styledMapType);
    this.map.setMapTypeId('styled_map');
  }

  polygoninitializer() {
    // Construct the polygon.
    const bucaramangaPolygon = new google.maps.Polygon({
      paths: this.bucaramangaDelimiters,
      strokeColor: '#CF9100',
      strokeOpacity: 0.8,
      strokeWeight: 3,
      fillColor: '#996633',
      fillOpacity: 0.35
    });

// Draw the polygon on the desired map instance
    bucaramangaPolygon.setMap(this.map);
  }

  toggleBounce(marker, e) {
    if (this.marker.getAnimation() !== null) {
      this.marker.setAnimation(null);
    } else {
      this.marker.setAnimation(google.maps.Animation.BOUNCE);
    }
  }

}

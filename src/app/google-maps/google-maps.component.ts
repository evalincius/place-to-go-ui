/// <reference types="@types/googlemaps" />
import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {MapStyleConfig} from "./map-style-config";
import StyledMapType = google.maps.StyledMapType;
import MapOptions = google.maps.MapOptions;
import LatLng = google.maps.LatLng;
import Marker = google.maps.Marker;
@Component({
  selector: 'p2g-google-maps',
  templateUrl: './google-maps.component.html',
  styleUrls: ['./google-maps.component.scss'],
  providers:[MapStyleConfig]

})
export class GoogleMapsComponent implements OnInit, AfterViewInit {

  constructor(private mapStyleConfig: MapStyleConfig) { }

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
  }

  // An array with the coordinates of the boundaries of Bucaramanga, extracted manually from the GADM database
  bucaramangaDelimiters = [
    {lng: 23.5040363225, lat: 53.9470452478},
    {lng: 23.3561091421, lat: 54.235409037},
    {lng: 22.7858822325, lat: 54.3638360549},
    {lng: 22.7201362602, lat: 54.693182154},
    {lng: 22.8650001902, lat: 54.8386001279},
    {lng: 22.6029091413, lat: 55.0448541228},
    {lng: 21.2639361475, lat: 55.2489821318},
    {lng: 21.051682051,  lat: 56.0773091309},
    {lng: 22.0672181875, lat: 56.4194361237},
    {lng: 24.169300268,  lat: 56.2622181065},
    {lng: 24.8941632333, lat: 56.449854218},
    {lng: 25.1015271599, lat: 56.1991541755},
    {lng: 25.5827732939, lat: 56.1513820212},
    {lng: 26.6132092691, lat: 55.6748361232},
    {lng: 26.4648542764, lat: 55.3387451067},
    {lng: 26.8068000524, lat: 55.2697181222},
    {lng: 25.7920821572, lat: 54.8730452238},
    {lng: 25.5516631896, lat: 54.326900025},
    {lng: 25.7127001695, lat: 54.3315182861},
    {lng: 25.7661091538, lat: 54.1538732355},
    {lng: 25.539927184,  lat: 54.1454821122},
    {lng: 25.4669362299, lat: 54.3043641048},
    {lng: 24.3916632751, lat: 53.890335973},
    {lng: 23.5040363225, lat: 53.9470452478},
  ];

  ngAfterViewInit() {
    this.mapInitializer();
    this.markersInitializer();
    this.polygoninitializer();
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
      strokeColor: '#FF0000',
      strokeOpacity: 0.8,
      strokeWeight: 3,
      fillColor: '#FF0000',
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

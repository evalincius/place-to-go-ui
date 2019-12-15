import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'p2g-cards-container',
  templateUrl: './cards-container.component.html',
  styleUrls: ['./cards-container.component.scss']
})
export class CardsContainerComponent implements OnInit {
  @Input() places: Place[];
  constructor() { }

  ngOnInit() {
    this.places = [
      {
        countryCode: 'string',
        city: 'string',
        name: 'string',
        coordinates: {lat:undefined, lng: undefined},
        imageId: '406a8360-3dfb-4d7a-8e56-e121530cffe0',
        address: '300 Possil Road, Glasgow, UK'
      },
      {
        countryCode: 'string',
        city: 'string',
        name: 'string',
        coordinates: {lat:undefined, lng: undefined},
        imageId: '406a8360-3dfb-4d7a-8e56-e121530cffe0',
        address: '300 Possil Road, Glasgow, UK'

      },
      {
        countryCode: 'string',
        city: 'string',
        name: 'string',
        coordinates: {lat:undefined, lng: undefined},
        imageId: '406a8360-3dfb-4d7a-8e56-e121530cffe0',
        address: '300 Possil Road, Glasgow, UK'
      }];
  }

}

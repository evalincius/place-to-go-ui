import { Component, OnInit } from '@angular/core';
import {PlaceService} from "./services/place.service";
import {FilterTypeEnum} from "./models/filter-type.enum";
import {CountryCode} from "../shared/model/country-code";

@Component({
  selector: 'p2g-places-container',
  templateUrl: './places-container.component.html',
  styleUrls: ['./places-container.component.scss'],
  providers: [PlaceService]
})
export class PlacesContainerComponent implements OnInit {
  public places: Place[];
  public isCollapsed = false;
  searchCriteria: string = "";


  constructor(private placeService: PlaceService) { }

  ngOnInit() {
    //this.placeService.searchPlaces([{type: FilterTypeEnum.CITY, value: 'Glasgow'}, {type: FilterTypeEnum.COUNTRY, value: CountryCode.UK}]).subscribe(places => this.places = places);
    this.placeService.getAllPlaces().subscribe(places => this.places = places);
  }

  onSubmit() {
    this.applySearchCriteria(this.searchCriteria);
  }

  private applySearchCriteria(searchCriteria: string){

    this.placeService.searchPlaces([{type: FilterTypeEnum.SEARCH, value: searchCriteria}]).subscribe(places => this.places = places)
  }
}

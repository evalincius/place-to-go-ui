import {Component, OnInit} from '@angular/core';
import {PlaceService} from "./services/place.service";
import {FilterTypeEnum} from "./models/filter-type.enum";
import {Filter} from "./models/filter";

@Component({
  selector: 'p2g-places-container',
  templateUrl: './places-container.component.html',
  styleUrls: ['./places-container.component.scss']
})
export class PlacesContainerComponent implements OnInit {
  public places: Place[];
  public isCollapsed = false;
  searchCriteria: string = "";
  filters: Filter[] = [];


  constructor(private placeService: PlaceService) { }

  ngOnInit() {
    //this.placeService.searchPlaces([{type: FilterTypeEnum.CITY, value: 'Glasgow'}, {type: FilterTypeEnum.COUNTRY, value: CountryCode.UK}]).subscribe(places => this.places = places);
    this.placeService.getAllPlaces().subscribe(places => this.places = places);
  }

  onSubmit() {
    this.applySearchCriteriaAndFilters();
  }

  private applySearchCriteriaAndFilters(){
    let searchAndFilter: Filter[] = this.filters.map(obj => ({...obj}));
    searchAndFilter.push({type: FilterTypeEnum.SEARCH, value: this.searchCriteria});
    this.placeService.searchPlaces(searchAndFilter).subscribe(places => this.places = places)
  }

  onFilterChanged(filters: Filter[]) {

    this.filters = filters;
    this.applySearchCriteriaAndFilters();
  }
}

import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {CountryService} from "../../../../services/country.service";
import {NgForm} from "@angular/forms";
import {BaseFilterComponent} from "../base-filter/base-filter.component";
import {Filter} from "../../../../models/filter";
import {FilterTypeEnum} from "../../../../models/filter-type.enum";
import {FilterChangeEvent} from "../../../../models/filter-change-event";

@Component({
  selector: 'p2g-country-filter',
  templateUrl: './country-filter.component.html',
  styleUrls: ['./country-filter.component.scss']
})
export class CountryFilterComponent extends BaseFilterComponent implements OnInit, AfterViewInit {
  selectedCountries: Object = {};
  countryList: Country[];

  @ViewChild('form', {static: false}) ngForm: NgForm;


  constructor(private countryService: CountryService) {
    super();
  }

  ngOnInit() {
    this.countryService.getCountrySummaries().subscribe(countries => this.countryList = countries);
  }

  ngAfterViewInit() {
    this.listenToFormChanges();
  }

  private listenToFormChanges() {
    this.ngForm.form.valueChanges.subscribe(change => {
      let listOfFilters: FilterChangeEvent[] = Object.keys(change)
        .filter(key => change[key] != undefined)
        .map(key => {
        return {
          type: FilterTypeEnum.COUNTRY,
          value: key,
          apply: change[key]
        }
      });
      if(listOfFilters.length > 0) {
        this.filterChanged.emit(listOfFilters);
      }
    });
  }
}

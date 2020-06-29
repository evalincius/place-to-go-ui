import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Filter} from "../../models/filter";
import {FilterChangeEvent} from "../../models/filter-change-event";

@Component({
  selector: 'p2g-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  @Output() filterChanged = new EventEmitter();
  listOfFilters: Filter[] = [];

  isHidden = true;

  constructor() { }

  ngOnInit() {
  }

  toggleShowHide() {
    this.isHidden = !this.isHidden;
  }

  onFilterChanged(filterChangeEvents: FilterChangeEvent[]) {
    filterChangeEvents.forEach(filterEvent => {
      let index = this.listOfFilters.findIndex(filter => filter.type == filterEvent.type && filter.value == filterEvent.value);

      if(filterEvent.apply && index == -1) {
        let filter: Filter = {type: filterEvent.type, value: filterEvent.value};
        this.listOfFilters.push(filter);
      }

      if(!filterEvent.apply && index > -1) {
        this.listOfFilters.splice(index, 1);
      }
    });
    this.filterChanged.emit(this.listOfFilters);
  }
}

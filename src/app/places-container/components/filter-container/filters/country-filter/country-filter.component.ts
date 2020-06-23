import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'p2g-country-filter',
  templateUrl: './country-filter.component.html',
  styleUrls: ['./country-filter.component.scss']
})
export class CountryFilterComponent implements OnInit {
  selected = 0;
  hovered = 0;
  constructor() { }

  ngOnInit() {
  }

}

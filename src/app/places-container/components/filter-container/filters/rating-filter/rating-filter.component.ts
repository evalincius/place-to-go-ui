import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'p2g-rating-filter',
  templateUrl: './rating-filter.component.html',
  styleUrls: ['./rating-filter.component.scss']
})
export class RatingFilterComponent implements OnInit {
  selected = 0;
  hovered = 0;
  isCollapsed = true;

  constructor() { }

  ngOnInit() {
  }


  toggleExpandCollapse() {
    this.isCollapsed = !this.isCollapsed;
  }

}

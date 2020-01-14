import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'p2g-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  isCollapsed = true;
  isHidden = true;
  selected = 0;
  hovered = 0;

  constructor() { }

  ngOnInit() {
  }

  toggleExpandCollapse() {
    this.isCollapsed = !this.isCollapsed;
  }

  toggleShowHide() {
    this.isHidden = !this.isHidden;
  }
}

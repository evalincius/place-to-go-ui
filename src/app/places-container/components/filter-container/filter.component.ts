import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'p2g-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  isHidden = true;

  constructor() { }

  ngOnInit() {
  }


  toggleShowHide() {
    this.isHidden = !this.isHidden;
  }
}

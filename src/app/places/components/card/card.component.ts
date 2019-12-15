import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'p2g-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() place: Place;
  constructor() { }

  ngOnInit() {
  }

}

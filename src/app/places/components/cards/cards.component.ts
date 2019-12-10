import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'p2g-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
  @Input() places: Place[];
  constructor() { }

  ngOnInit() {
  }

}

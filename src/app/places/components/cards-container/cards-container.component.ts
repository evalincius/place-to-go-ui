import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'p2g-cards-container',
  templateUrl: './cards-container.component.html',
  styleUrls: ['./cards-container.component.scss']
})
export class CardsContainerComponent implements OnInit {
  @Input() places: Place[];
  constructor() { }

  ngOnInit() {}

}

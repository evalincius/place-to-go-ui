import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { Card } from './card';
import * as _ from 'lodash';


@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
  cardGroups: [];
  cards: Card[];
  constructor() { }

  ngOnInit() {
    this.cards = this.getCards();
    this.cardGroups = this.getCardGroups();
    AOS.init({
      duration: 600,
      easing: 'ease-in-sine',
      delay: 200,
    });
  }

  private getCards(): Card[] {
      const cards: Card[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(() => {
        return {
          imageUrl: `https://picsum.photos/700/500?random&t=${Math.random()}`,
          title: 'Title',
          description: 'Bla bla',
          lastUpdated: 'asdasd'
        };
      });
      return cards;
  }

  private getCardGroups() {
    return _.chunk(this.getCards(), 3);
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-black-jack',
  templateUrl: './black-jack.component.html',
  styleUrls: ['./black-jack.component.scss']
})
export class BlackJackComponent implements OnInit {

  deck: Array<Object>;
  currentDeck: Array<Object>;
  suits: Array<String> = ['diamonds', 'hearts', 'crosses', 'spides'];
  cardValues: Array<String> = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];

  constructor() { }

  ngOnInit() {
    this.deck = this.initDeck();
    this.currentDeck = this.deck;
  }

  initDeck = () => {
    const cards = [];
    for (let suit = 0; suit < 4; suit ++) {
      for (let card = 0; card < 13; card ++) {
        cards.push({ suit: this.suits[suit], value: this.cardValues[card] })
      }
    }
    return cards;
  }

  shuffleCards = (deck, numberOfShuffles = 1) => {
    const newDeck = [ ...deck ];
    const swapCards = (firstCardIndex, secondCardIndex) => {
      [ newDeck[firstCardIndex], newDeck[secondCardIndex] ] = [ newDeck[secondCardIndex], newDeck[firstCardIndex] ]
    }

    for (let shuffleNumber = 0; shuffleNumber < numberOfShuffles; shuffleNumber ++) {
      newDeck.forEach((card, index) => {
        const secondCardIndex = Math.floor(Math.random() * newDeck.length);
        swapCards(index, secondCardIndex);newDeck.forEach((card, index) => {
          const secondCardIndex = Math.floor(Math.random() * newDeck.length);
          swapCards(index, secondCardIndex);
        })
      });
    }
    
    return newDeck;
  }

  handleShuffleCards = () => {
    this.currentDeck = this.shuffleCards(this.currentDeck, 10);
  }

}

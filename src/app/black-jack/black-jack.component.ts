import { Component, OnInit } from '@angular/core';
import { CardShape } from '../card-shape';

@Component({
  selector: 'app-black-jack',
  templateUrl: './black-jack.component.html',
  styleUrls: ['./black-jack.component.scss']
})
export class BlackJackComponent implements OnInit {

  deck: Array<CardShape>;
  currentDeck: Array<CardShape>;
  dealerCards: Array<CardShape>;
  playerCards: Array<CardShape>;
  suits: Array<String> = ['diamonds', 'hearts', 'clubs', 'spides'];
  cardValues: Array<String> = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];
  isGameRunning: boolean = false;
  isDealerTurn: boolean = false;
  isResultShown: boolean = false;
  playerScore: Number = 0;
  dealerScore: Number = 0;

  constructor() { }

  ngOnInit() {
    this.deck = this.initDeck();
    this.currentDeck = [ ...this.deck ];
  }

  initDeck = () => {
    const cards = [];
    const getCardScore = (index: number) => {
      switch (index) {
        case 9:
        case 10:
        case 11:
          return 10;
        case 12:
          return 11;
        default:
          return index + 2;
      }
    }

    for (let suit = 0; suit < 4; suit ++) {
      for (let card = 0; card < 13; card ++) {
        cards.push({
          suit: this.suits[suit],
          value: this.cardValues[card],
          score: getCardScore(card),
          isFaceDown: true,
        });
      }
    }
    return cards;
  }

  shuffleCards = (deck: Array<CardShape>, numberOfShuffles: Number = 1) => {
    const newDeck = [ ...deck ];
    const swapCards = (firstCardIndex, secondCardIndex) => {
      [ newDeck[firstCardIndex], newDeck[secondCardIndex] ] = [ newDeck[secondCardIndex], newDeck[firstCardIndex] ]
    }

    for (let shuffleNumber = 0; shuffleNumber < numberOfShuffles; shuffleNumber ++) {
      newDeck.forEach((card, index) => {
        const secondCardIndex = Math.floor(Math.random() * newDeck.length);
        swapCards(index, secondCardIndex);
        newDeck.forEach((card, index) => {
          const secondCardIndex = Math.floor(Math.random() * newDeck.length);
          swapCards(index, secondCardIndex);
        })
      });
    }
    
    return newDeck;
  }

  handleStart = () => {
    this.isDealerTurn = false;
    this.isResultShown = false;
    this.isGameRunning = true;
    this.currentDeck = this.shuffleCards(this.deck, 10);
    this.dealerCards = [];
    this.playerCards = [];

    this.dealerCards.push(this.getCard(this.currentDeck, true));
    this.dealerCards.push(this.getCard(this.currentDeck, true));

    this.playerCards.push(this.getCard(this.currentDeck));
    this.playerCards.push(this.getCard(this.currentDeck));

    this.calculateScore();
  }

  handleExit = () => {
    this.isResultShown = false;
    this.isGameRunning = false;
    this.currentDeck = [ ...this.deck ];
    this.playerCards = null;
    this.dealerCards = null;
  }

  handleGetPlayerCard = () => {
    if (this.playerCards && this.currentDeck.length && !this.isResultShown) {
      this.playerCards.push(this.getCard(this.currentDeck));
      this.calculateScore();
      if (this.playerScore > 21) {
        console.log('You loose');
        this.isResultShown = true;
      }
    }
  }

  handleEnough = () => {
    this.isDealerTurn = true;
    this.dealerTurn();
  }

  handleOpenUp = () => {
    this.dealerCards.forEach(card => {
      card.isFaceDown = false;
    })
    if (this.dealerScore > 21) {
      console.log('You win');
    } else if (this.dealerScore === this.playerScore) {
      console.log('Draw');
    } else if (this.dealerScore > this.playerScore) {
      console.log('You loose');
    } else {
      console.log('You win');
    }
    this.isResultShown = true;
  }

  getCard = (deck: Array<CardShape>, isFaceDown: boolean = false) => {
    const card = { ...deck.pop()};
    card.isFaceDown = isFaceDown;
    return card;
  }

  dealerTurn = () => {
    while (this.dealerScore < 17) {
      this.dealerCards.push(this.getCard(this.currentDeck, true));
      this.calculateScore();
    }
  }

  calculateScore = () => {
    this.playerScore = this.calculateDeckScore(this.swapAcesScore(this.playerCards));
    this.dealerScore = this.calculateDeckScore(this.swapAcesScore(this.dealerCards));
  }

  calculateDeckScore = (deck: Array<CardShape>) => {
    return deck.reduce((result, card) => (result + card.score), 0);
  }

  swapAcesScore = (cards: Array<CardShape>) => {
    const cardsCopy = [ ...cards ];
    for (let i = 0; i < 4 && this.calculateDeckScore(cardsCopy) > 21; i ++) {
      const aceCardIndex = cardsCopy.findIndex(card => (card.score === 11));
      if (aceCardIndex !== -1) {
        cardsCopy[aceCardIndex].score = 1;
      }
    }

    return cardsCopy;
  }

}

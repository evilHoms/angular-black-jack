import { Component, OnInit, Input } from '@angular/core';
import { CardShape } from 'src/app/card-shape';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() card: CardShape;
  suitImg: String;
  classNames: String;

  constructor() { }

  ngOnInit() {
    switch (this.card.suit) {
      case 'hearts':
        this.suitImg = 'http://clipart-library.com/img/812299.png';
        break;
      case 'diamonds':
        this.suitImg = 'https://www.adda52.com/blog/wp-content/uploads/2013/10/adda52-diamond-suit-card.png';
        break;
      case 'spides':
        this.suitImg = 'https://image.flaticon.com/icons/png/512/24/24155.png';
        break;
      case 'clubs':
        this.suitImg = 'https://cdn.pixabay.com/photo/2015/05/11/02/25/clover-761861_960_720.png';
        break;
    }

    this.classNames = this.card.isFaceDown ? 'black-jack-card face-down' : 'black-jack-card';
  }

}

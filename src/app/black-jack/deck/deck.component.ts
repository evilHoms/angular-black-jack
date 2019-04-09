import { Component, OnInit, Input } from '@angular/core';
import { CardShape } from 'src/app/card-shape';

@Component({
  selector: 'app-deck',
  templateUrl: './deck.component.html',
  styleUrls: ['./deck.component.scss']
})
export class DeckComponent implements OnInit {

  @Input() cards: Array<CardShape>;

  constructor() { }

  ngOnInit() {
  }

  handleDeckClick = () => {
    console.log('get card');
  }

}

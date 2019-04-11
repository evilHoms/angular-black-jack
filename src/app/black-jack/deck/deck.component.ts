import { Component, OnInit, Input } from '@angular/core';
import classNames from 'classnames';
import { CardShape } from 'src/app/card-shape';

@Component({
  selector: 'app-deck',
  templateUrl: './deck.component.html',
  styleUrls: ['./deck.component.scss']
})
export class DeckComponent implements OnInit {

  @Input() cards: Array<CardShape>;
  @Input() oneByOne: Boolean;
  @Input() isClickable: Boolean;

  classNames: String;

  constructor() { }

  ngOnInit() {
    this.setClassNames();
  }

  ngOnChanges() {
    this.setClassNames();
  }

  setClassNames = () => {
    this.classNames = classNames({
      'black-jack-deck': true,
      'one-by-one': this.oneByOne,
      'is-clickable': this.isClickable,
    });
  }

}

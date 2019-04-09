import { Component, OnInit, Input } from '@angular/core';
import { CardShape } from 'src/app/card-shape';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() card: CardShape;

  constructor() { }

  ngOnInit() {
  }

}

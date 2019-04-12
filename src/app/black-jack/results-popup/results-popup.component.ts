import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import classNames from 'classnames';

@Component({
  selector: 'app-results-popup',
  templateUrl: './results-popup.component.html',
  styleUrls: ['./results-popup.component.scss']
})
export class ResultsPopupComponent implements OnInit {

  @Input() playerScore: number;
  @Input() dealerScore: number;
  @Input() playerWins: number;
  @Input() dealerWins: number;
  @Input() result: String;

  @Output() restart: EventEmitter<any> = new EventEmitter();
  @Output() exit: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  handleRestart = () => {
    this.restart.emit();
  }

  handleExit = () => {
    this.exit.emit();
  }

  getClassNames = () => {
    return classNames({ "result-popup": true, "show-result": !!this.result });
  }

}

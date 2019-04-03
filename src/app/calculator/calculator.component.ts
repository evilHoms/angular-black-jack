import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {

  prevValue: String = '';
  sign: String = '';
  value: String = '0';

  constructor() { }

  ngOnInit() {
  }

  handleNumberClick = (event) => {
    const value = event.target.outerText;
    if (this.value === '0') {
      this.value = value;
    } else {
      this.value += value;
    }
  }

  handleSignClick = (event) => {
    const sign = event.target.outerText;
    if (sign === 'C') {
      this.sign = '';
      this.value = '0';
      this.prevValue = '';
    } else if (sign === '←') {
      if (this.value.length > 1) {
        this.value = this.value.slice(0, this.value.length - 1);
      } else {
        this.value = '0';
      }
    } else if(sign === '=') {
      this.prevValue = this.calculate(this.prevValue, this.value, this.sign);
      this.value = '';
      this.sign = '';
    } else {
      this.prevValue = this.calculate(this.prevValue, this.value, sign);
      this.value = '0';
      this.sign = sign;
    }
  }

  calculate(firstValue: String = '0', secondValue: String = '0', sign) {
    switch(sign) {
      case '+': {
        return String(Number(firstValue) + Number(secondValue));
      }
      case '-': {
        return String(Number(firstValue) - Number(secondValue));
      }
      case '*': {
        return String(Number(firstValue) * Number(secondValue));
      }
      case '/': {
        return String(Number(firstValue) / Number(secondValue));
      }
    }
  }

}

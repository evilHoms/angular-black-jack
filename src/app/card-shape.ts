export interface CardShape {
  suit: 'diamonds' | 'hearts' | 'crosses' | 'spides',
  value: '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | 'Jack' | 'Queen' | 'King'| 'Ace',
  isSuitUp: Boolean,
}

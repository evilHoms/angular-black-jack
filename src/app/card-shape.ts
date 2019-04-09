export interface CardShape {
  suit: 'diamonds' | 'hearts' | 'clubs' | 'spides',
  value: '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | 'Jack' | 'Queen' | 'King'| 'Ace',
  isFaceDown: Boolean,
}

const LETTER_POOL = {
  A: 9,
  B: 2,
  C: 2,
  D: 4,
  E: 12,
  F: 2,
  G: 3,
  H: 2,
  I: 9,
  J: 1,
  K: 1,
  L: 4,
  M: 2,
  N: 6,
  O: 8,
  P: 2,
  Q: 1,
  R: 6,
  S: 4,
  T: 6,
  U: 4,
  V: 2,
  W: 2,
  X: 1,
  Y: 2,
  Z: 1,
};

// wave 1
// helper function
const buildLetterPoolArray = () => {
  const letterArray = [];
  for (const [letter, freq] of Object.entries(LETTER_POOL)) {
    for (let i = 0; i < freq; i++) {
      letterArray.push(letter);
    }
  }
  return letterArray;
};

export const drawLetters = () => {
  const letterArray = buildLetterPoolArray();
  const hand = [];

  while (hand.length < 10) {
    const randIndex = Math.floor(Math.random() * letterArray.length);
    const letter = letterArray[randIndex];

    const letterCountInHand = hand.filter(l => l === letter).length;

    if (letterCountInHand < LETTER_POOL[letter]) {
      hand.push(letter);
    }
  }

  return hand;
};


export const usesAvailableLetters = (input, lettersInHand) => {
  // Implement this method for wave 2
};

export const scoreWord = (word) => {
  // Implement this method for wave 3
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
};

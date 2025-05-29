const LETTER_POOL = {
  A: 9, B: 2, C: 2, D: 4, E: 12, F: 2, G: 3, H: 2,
  I: 9, J: 1, K: 1, L: 4, M: 2, N: 6, O: 8, P: 2,
  Q: 1, R: 6, S: 4, T: 6, U: 4, V: 2, W: 2, X: 1,
  Y: 2, Z: 1,
};

const SCORE_CHART = {
  A: 1, E: 1, I: 1, O: 1, U: 1, L: 1, N: 1, R: 1, S: 1, T: 1,
  D: 2, G: 2,
  B: 3, C: 3, M: 3, P: 3,
  F: 4, H: 4, V: 4, W: 4, Y: 4,
  K: 5,
  J: 8, X: 8,
  Q: 10, Z: 10,
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

    const letterCountInHand = hand.filter(letterInHand => letterInHand === letter).length;

    if (letterCountInHand < LETTER_POOL[letter]) {
      hand.push(letter);
    }
  }

  return hand;
};

// wave 2
export const usesAvailableLetters = (input, lettersInHand) => {
  const handCopy = [...lettersInHand];
  for (let char of input.toUpperCase()) {
    const index = handCopy.indexOf(char);
    if (index === -1) {
      return false;
    }
    handCopy.splice(index, 1);
  }
  return true;
};

// wave 3
export const scoreWord = (word) => {
  if (!word) return 0;

  const upperWord = word.toUpperCase();
  let score = 0;

  for (let char of upperWord) {
    score += SCORE_CHART[char] || 0;
  }

  if (upperWord.length >= 7) {
    score += 8;
  }

  return score;
};

// wave 4
export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
};

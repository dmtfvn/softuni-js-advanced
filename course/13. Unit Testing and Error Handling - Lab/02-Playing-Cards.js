function solveCurTask(face, suit) {
  const cardFaces = [
    '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'
  ];

  const cardSuits = {
    'C': '\u2663',
    'D': '\u2666',
    'H': '\u2665',
    'S': '\u2660'
  };

  if (!cardFaces.includes(face)) {
    throw new Error('Invalid face');
  }

  if (!cardSuits.hasOwnProperty(suit)) {
    throw new Error('Invalid suit');
  }

  return {
    face,
    suit,
    toString() {
      return this.face + cardSuits[this.suit];
    }
  };
}

try {
  console.log(solveCurTask('A', 'S').toString());
  console.log(solveCurTask('10', 'H').toString());
  console.log(solveCurTask('1', 'C').toString());
} catch (err) {
  console.log(`Error creating card - ${err.message}`);
}
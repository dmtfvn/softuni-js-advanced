function solveCurTask(arr) {
  const cardsDeck = [];

  function createCard(f, s) {
    const cardFaces = [
      '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'
    ];

    const cardSuits = {
      'C': '\u2663',
      'D': '\u2666',
      'H': '\u2665',
      'S': '\u2660'
    };

    if (!cardFaces.includes(f) || !cardSuits.hasOwnProperty(s)) {
      console.log(`Invalid card: ${f}${s}`);
    }

    const curFace = cardFaces.filter(el => el === f);
    const curSuit = cardSuits[s];

    return `${curFace}${curSuit}`;
  }

  arr.forEach(card => {
    const face = card.substring(0, card.length - 1);
    const suit = card.substring(card.length - 1);

    const newCard = createCard(face, suit);

    cardsDeck.push(newCard);
  });

  console.log(cardsDeck.join(' '));
}

solveCurTask(['AS', '10D', 'KH', '2C']);
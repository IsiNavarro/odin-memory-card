import paintings from './paintings';

class Deck {
  constructor(numberOfCards = 10) {
    this.paintings = paintings;
    this.cards = this.chooseRandomCards(numberOfCards);
  }

  chooseRandomCards(numberOfCards) {
    const paintingsCopy = [...this.paintings];

    //Get out numberOfCards from copy
    for (let i = 0; i < 10 - numberOfCards; i++) {
      const randomIndex = Math.floor(Math.random() * (numberOfCards + 1));

      paintingsCopy.splice(randomIndex, 1);
    }

    return paintingsCopy;
  }

  shuffleCards(cards) {
    for (let i = cards.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = cards[i];
      cards[i] = cards[j];
      cards[j] = temp;
    }

    return cards;
  }
}

export default Deck;

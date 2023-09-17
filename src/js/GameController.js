import Deck from './Deck';

const GameControler = new (class GameController {
  constructor() {
    this.score = 0;
    this.bestScore = 0;
    this.gameState = 'home'; //'home', 'over', 'win'
    this.choices = [];
    this.deck = new Deck(10);
  }
  playRound(choice) {
    //Choice is card.id

    //Check wrong choice
    if (this.choices.includes(choice)) {
      this.gameOver();
    } else {
      //Update scores
      this.score += 1;
      if (this.score > this.bestScore) this.bestScore = this.score;

      //Add choice to choices
      this.choices.push(choice);

      //Check for a win
      if (this.choices.length === this.deck.cards.length) this.win();
    }
  }
  setDifficulty(difficulty) {
    this.deck = new Deck(difficulty);
  }
  playAgain() {
    this.score = 0;
    this.choices = [];

    this.gameOn();
  }
  goHome() {
    this.gameState = 'home';
  }
  gameOn() {
    this.gameState = 'on';
  }
  gameOver() {
    this.gameState = 'over';
  }
  win() {
    this.gameState = 'win';
  }
})();

export default GameControler;
//Game off ---> display rules and playGame options
//GameOn ---> playRound(playerChoice) {      shuffleCards(); displayCards();       }

//Display shuffleCards
//Player makes a choice
//if bad: gameOver
//If correct:
//  updateScores
// reshuffle and display

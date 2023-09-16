import { useState } from 'react';

import Deck from './js/Deck';
import GameController from './js/GameController';

import Home from './components/Home/Home';
import GameOn from './components/gameOn/GameOn';
import GameOver from './components/gameOver/GameOver';
import Win from './components/win/Win';

GameController.deck = new Deck(2);

function App() {
  const [cards, setCards] = useState(GameController.deck.cards);
  const [score, setScore] = useState(GameController.score);
  const [bestScore, setBestScore] = useState(GameController.bestScore);
  const [gameState, setGameState] = useState(GameController.gameState);

  const handleCardClick = (e) => {
    const choice = e.target.id;
    GameController.playRound(choice);

    setGameState(GameController.gameState);
    setScore(GameController.score);
    setBestScore(GameController.bestScore);
    setCards((prevCards) => GameController.deck.shuffleCards([...prevCards]));
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      {
        {
          home: <Home />,
          on: (
            <GameOn
              cards={cards}
              handleCardClick={handleCardClick}
              score={score}
              bestScore={bestScore}
            />
          ),
          over: <GameOver />,
          win: <Win />,
        }[gameState]
      }
    </div>
  );
}

export default App;

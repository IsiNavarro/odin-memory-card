import { useState } from 'react';

import sampleDeck from './js/Deck';
import GameController from './js/GameController';

import GameOn from './components/gameOn/GameOn';

function App() {
  const [cards, setCards] = useState(sampleDeck.cards);
  const [score, setScore] = useState(GameController.score);
  const [bestScore, setBestScore] = useState(GameController.bestScore);
  const [gameState, setGameState] = useState(GameController.gameState);

  const handleCardClick = (e) => {
    const choice = e.target.id;
    GameController.playRound(choice);

    setGameState(GameController.gameState);
    setScore(GameController.score);
    setBestScore(GameController.bestScore);
    setCards((prevCards) => sampleDeck.shuffleCards([...prevCards]));
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      {gameState === 'on' && (
        <GameOn
          cards={cards}
          handleCardClick={handleCardClick}
          score={score}
          bestScore={bestScore}
        />
      )}
    </div>
  );
}

export default App;

import { useState } from 'react';

import GameController from './js/GameController';

import Home from './components/homePage/Home';
import GameOn from './components/gameOn/GameOn';
import GameOver from './components/gameOver/GameOver';
import Win from './components/win/Win';

function App() {
  const [cards, setCards] = useState(GameController.deck.cards);
  const [score, setScore] = useState(GameController.score);
  const [bestScore, setBestScore] = useState(GameController.bestScore);
  const [gameState, setGameState] = useState(GameController.gameState);
  const [lastChosenCard, setLastChosenCard] = useState('');

  const handleCardClick = (e) => {
    const choice = e.target.id;
    GameController.playRound(choice);

    setGameState(GameController.gameState);
    setScore(GameController.score);
    setBestScore(GameController.bestScore);
    setCards((prevCards) => GameController.deck.shuffleCards([...prevCards]));
    setLastChosenCard(e.target.alt);
  };

  const handlePlayAgain = () => {
    GameController.playAgain();

    setGameState(GameController.gameState);
    setScore(GameController.score);
    setBestScore(GameController.bestScore);
    setCards((prevCards) => GameController.deck.shuffleCards([...prevCards]));
  };

  const goHome = () => {
    GameController.goHome();

    setGameState(GameController.gameState);
    setScore(GameController.score);
    setBestScore(GameController.bestScore);
    setCards((prevCards) => GameController.deck.shuffleCards([...prevCards]));
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="bg-slate-300">
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
            over: (
              <GameOver
                lastChosenCard={lastChosenCard}
                score={score}
                bestScore={bestScore}
                handlePlayAgain={handlePlayAgain}
                goHome={goHome}
              />
            ),
            win: <Win />,
          }[gameState]
        }
      </div>
    </div>
  );
}

export default App;

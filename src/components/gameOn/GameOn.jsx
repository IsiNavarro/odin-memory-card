import React from 'react';
import DisplayCards from './DisplayCards';
import ScoreDisplay from './ScoreDisplay';

const GameOn = ({ cards, handleCardClick, score, bestScore }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <DisplayCards cards={cards} handleCardClick={handleCardClick} />
      <ScoreDisplay score={score} bestScore={bestScore} />
    </div>
  );
};

export default GameOn;

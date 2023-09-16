import React from 'react';
import DisplayCards from './DisplayCards';
import ScoreDisplay from './ScoreDisplay';

const GameOn = ({ cards, handleCardClick, score, bestScore }) => {
  return (
    <div className="flex flex-col xl:flex-col-reverse gap-6 items-center justify-center">
      <ScoreDisplay score={score} bestScore={bestScore} />
      <DisplayCards cards={cards} handleCardClick={handleCardClick} />
    </div>
  );
};

export default GameOn;

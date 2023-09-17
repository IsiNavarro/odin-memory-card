import React from 'react';
import DisplayCards from './DisplayCards';
import ScoreDisplay from '../ScoreDisplay';

const GameOn = ({ cards, handleCardClick, score, bestScore }) => {
  return (
    <section className="flex flex-col gap-6 items-center justify-center">
      <ScoreDisplay score={score} bestScore={bestScore} />
      <DisplayCards cards={cards} handleCardClick={handleCardClick} />
    </section>
  );
};

export default GameOn;

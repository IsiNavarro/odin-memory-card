import React from 'react';
import ScoreDisplay from '../ScoreDisplay';

const GameOver = ({
  lastChosenCard,
  score,
  bestScore,
  handlePlayAgain,
  goHome,
}) => {
  return (
    <section className="text-xl mx-2 flex flex-col items-center justify-center gap-10">
      <h1 className="font-bold text-slate-800 text-4xl">Game Over...</h1>
      <p className="text-slate-600 text-center">
        Too bad! <span className="font-bold text-2xl">{lastChosenCard}</span>{' '}
        had already been chosen.
      </p>
      <div className="flex gap-2">
        <button
          onClick={handlePlayAgain}
          className="hover:bg-slate-500 duration-100 px-3 py-1 rounded-sm bg-slate-700 font-bold text-slate-100"
        >
          Play again
        </button>
        <button
          onClick={goHome}
          className="hover:bg-slate-500 duration-100 px-3 py-1 rounded-sm bg-slate-700 font-bold text-slate-100"
        >
          Change difficulty
        </button>
      </div>
      <ScoreDisplay score={score} bestScore={bestScore} />
    </section>
  );
};

export default GameOver;

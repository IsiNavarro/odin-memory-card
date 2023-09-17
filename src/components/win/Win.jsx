import React from 'react';
import ScoreDisplay from '../ScoreDisplay';

const Win = ({ score, bestScore, handlePlayAgain, goHome }) => {
  return (
    <section className="text-xl mx-2 flex flex-col items-center justify-center gap-10">
      <h1 className="font-bold text-slate-700 text-4xl">
        You <span className="text-6xl text-slate-900">WON</span>
        <span className="text-6xl">!</span>
      </h1>
      <p className="text-slate-600 text-center">
        Congratulations! You managed to click every card without repeating any
        of them.
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

export default Win;

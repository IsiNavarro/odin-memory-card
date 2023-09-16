import React from 'react';

const ScoreDisplay = ({ score, bestScore }) => {
  return (
    <div className="bg-white py-2 px-4 rounded-sm">
      <div className="text-xl font-bold text-slate-800">
        {'Right choices: '}
        <span className="text-slate-700">{score}</span>
      </div>
      <div className="text-xl font-bold text-slate-800">
        {'Best score: '}
        <span className="text-slate-700">{bestScore}</span>
      </div>
    </div>
  );
};

export default ScoreDisplay;

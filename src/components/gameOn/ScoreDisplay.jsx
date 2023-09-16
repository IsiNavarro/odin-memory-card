import React from 'react';

const ScoreDisplay = ({ score, bestScore }) => {
  return (
    <div>
      <div className="text-xl font-bold text-yellow-500">
        {'Current score: '}
        {score}
      </div>
      <div className="text-xl font-bold text-yellow-500">
        {'Best score: '}
        {bestScore}
      </div>
    </div>
  );
};

export default ScoreDisplay;

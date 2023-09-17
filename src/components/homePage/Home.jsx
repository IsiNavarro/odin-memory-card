import React from 'react';

const Home = ({ handleDifficulty }) => {
  return (
    <section className="text-xl py-4 px-2 max-w-[1000px] flex flex-col items-center justify-center gap-6">
      <h1 className="text-4xl font-bold text-slate-700 text-center">
        Welcome to the{' '}
        <span className="text-slate-900 text-center">
          Art Gallery Memoseum{' '}
        </span>
        !
      </h1>
      <p className="text-slate-700 text-center">
        The ultimate art connoisseur's challenge! Immerse yourself in a world of
        timeless creativity as you embark on a journey through some of history's
        most iconic paintings. In this small, yet exciting game, your keen eye
        and swift reflexes will be put to the test.
      </p>
      <p className="text-slate-700 text-center">
        The objective is simple: click on as many famous paintings as you can,
        but here's the catch – you can't click on the same masterpiece twice!
      </p>
      <p className="text-slate-700 text-center">
        Are you ready to put your memory to the test? Let the game begin!
      </p>
      <div className="w-full flex flex-col items-center gap-2">
        <h2 className="font-bold text-3xl text-slate-900 border-b-4 border-b-slate-400 py-1">
          Choose difficulty
        </h2>
        <div className="flex flex-col gap-2 xl:flex-row xl:gap-4 xl:mt-4">
          <button
            onClick={handleDifficulty}
            id="5"
            className="py-2 px-4 bg-teal-400 rounded-sm font-bold text-teal-700 hover:bg-teal-300 duration-100"
          >
            Easy
          </button>
          <button
            onClick={handleDifficulty}
            id="7"
            className="py-2 px-4 bg-blue-400 rounded-sm font-bold text-blue-700 hover:bg-blue-300 duration-100"
          >
            Medium
          </button>
          <button
            onClick={handleDifficulty}
            id="10"
            className="py-2 px-4 bg-orange-400 rounded-sm font-bold text-orange-700 hover:bg-orange-300 duration-100"
          >
            Hard
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;

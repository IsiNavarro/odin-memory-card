import React from 'react';

const Card = ({ id, title, author, image, handleCardClick }) => {
  return (
    <div className="flex flex-col items-center max-w-[250px] gap-2">
      <button
        onClick={handleCardClick}
        className="max-w-[300px] xl:max-w-[220px] shadow-xl shadow-slate-400"
      >
        <img
          id={id}
          className="p-5 bg-yellow-600 border-8 border-yellow-500 h-full w-full object-contain rounded-sm"
          src={image}
          alt={title}
        />
      </button>
      <button onClick={handleCardClick}>
        <h2 className="flex flex-col text-center font-bold text-[#b32944] p-1  rounded-sm">
          {title}
          <span className="text-xs  text-white">
            {' by '}
            {author}
          </span>
        </h2>
      </button>
    </div>
  );
};
const DisplayCards = ({ cards, handleCardClick }) => {
  return (
    <div className="flex flex-col xl:flex-row xl:flex-wrap items-center justify-center gap-8">
      {cards.map((card) => {
        return (
          <Card
            key={card.id}
            id={card.id}
            title={card.title}
            author={card.author}
            image={card.image}
            handleCardClick={handleCardClick}
          />
        );
      })}
    </div>
  );
};

export default DisplayCards;

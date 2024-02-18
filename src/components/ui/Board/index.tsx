import React from "react";
import useCard from "../../../hooks";

import { Card, Modal } from "../../common";

import "./styles.css";

const Board: React.FC = () => {
  const {
    cards,
    flippedCards,
    matchedCards,
    handleCardClick,
    handleResetGame,
    isGameFinished,
  } = useCard();

  return (
    <div>
      <div className="board">
        {cards.map((card) => (
          <Card
            key={card.uniqueId}
            id={card.uniqueId}
            url={card.url}
            isFlipped={
              flippedCards.includes(card.uniqueId) ||
              matchedCards.includes(card.uniqueId)
            }
            onCardClick={handleCardClick}
          />
        ))}
      </div>
      {isGameFinished && <Modal onRestart={handleResetGame} />}
    </div>
  );
};

export { Board };

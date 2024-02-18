import { useState, useEffect } from "react";
import { ICatImage, fetchCards } from "../api";

import { shuffleArray } from "../utils/array-shuffle";

const useCard = () => {
  const [cards, setCards] = useState<ICatImage[]>([]);
  const [flippedCards, setFlippedCards] = useState<string[]>([]);
  const [matchedCards, setMatchedCards] = useState<string[]>([]);
  const [isGameFinished, setIsGameFinished] = useState(false);

  const initializeCards = async () => {
    const fetchedCards = await fetchCards();
    const duplicatedCards = fetchedCards.flatMap((card) => [
      { ...card, uniqueId: `${card.id}-0` },
      { ...card, uniqueId: `${card.id}-1` },
    ]);
    setCards(shuffleArray(duplicatedCards));
  };

  useEffect(() => {
    initializeCards();
  }, []);

  const handleCardClick = (uniqueId: string) => {
    if (flippedCards.includes(uniqueId) || matchedCards.includes(uniqueId)) {
      return;
    }

    const newFlippedCards = [...flippedCards, uniqueId];
    setFlippedCards(newFlippedCards);

    if (newFlippedCards.length === 2) {
      const firstCardId = newFlippedCards[0].slice(0, -2);
      const secondCardId = newFlippedCards[1].slice(0, -2);

      if (firstCardId === secondCardId) {
        setMatchedCards((prev) => [...prev, ...newFlippedCards]);
        setFlippedCards([]);

        if (matchedCards.length + 2 === cards.length) {
          setIsGameFinished(true);
        }
      } else {
        setTimeout(() => {
          setFlippedCards([]);
        }, 1000);
      }
    }
  };

  const handleResetGame = () => {
    setMatchedCards([]);
    setFlippedCards([]);
    setIsGameFinished(false);
    initializeCards();
  };

  return {
    cards,
    flippedCards,
    matchedCards,
    handleCardClick,
    handleResetGame,
    isGameFinished,
  };
};

export default useCard;

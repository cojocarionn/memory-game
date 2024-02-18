import React from "react";

import "./styles.css";

interface CardProps {
  id: string;
  url: string;
  isFlipped: boolean;
  onCardClick: (id: string) => void;
}

const Card: React.FC<CardProps> = ({ id, url, isFlipped, onCardClick }) => {
  return (
    <div
      className={`card ${isFlipped ? "flipped" : ""}`}
      onClick={() => onCardClick(id)}
    >
      <div className="card-inner">
        <div className="card-front" />
        <div className="card-back">
          <img src={url} alt="Card" />
        </div>
      </div>
    </div>
  );
};

export { Card };

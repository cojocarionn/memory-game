import React from "react";

import "./styles.css";

interface ModalProps {
  onRestart: () => void;
}

const Modal: React.FC<ModalProps> = ({ onRestart }) => {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Congratulations!</h2>
        <p>You have completed the game successfully!</p>
        <button onClick={onRestart}>Restart</button>
      </div>
    </div>
  );
};

export { Modal };

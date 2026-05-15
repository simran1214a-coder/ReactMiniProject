import { useState } from 'react';
import './Flashcard.css';

function Flashcard({
  term,
  definition,
  difficulty,
  onFlip,
}) {
  const [flip, setFlip] = useState(false);

  const handleClick = () => {
    setFlip(!flip);

    if (!flip) {
      onFlip();
    }
  };

  return (
    <div
      className={`card ${flip ? 'flipped' : ''}`}
      onClick={handleClick}
    >
      <div className="card-inner">
        <div className="card-front">
          <div>
            <span className={`difficulty ${difficulty.toLowerCase()}`}>
              {difficulty}
            </span>

            <h2>{term}</h2>
          </div>
        </div>

        <div className="card-back">
          <p>{definition}</p>
        </div>
      </div>
    </div>
  );
}

export default Flashcard;
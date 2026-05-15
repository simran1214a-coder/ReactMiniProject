import './App.css';
import Flashcard from './components/Flashcard';
import { flashcards } from './data';
import { useState } from 'react';

function App() {
  const [learnedCards, setLearnedCards] = useState([]);
  const [filter, setFilter] = useState('All');

  const handleFlip = (id) => {
    if (!learnedCards.includes(id)) {
      setLearnedCards([...learnedCards, id]);
    }
  };

  const filteredCards =
    filter === 'All'
      ? flashcards
      : flashcards.filter(
          (card) => card.difficulty === filter
        );

  return (
    <div className="app">
      <h1>💻 Dev-Term Flashcards</h1>

      <p className="subtitle">
        Click on a card to reveal the definition
      </p>

      <div className="progress-box">
        <h3>
          Progress: {learnedCards.length} / {flashcards.length} Cards Learned
        </h3>

        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{
              width: `${
                (learnedCards.length / flashcards.length) * 100
              }%`,
            }}
          ></div>
        </div>
      </div>

      <div className="filter-buttons">
        <button onClick={() => setFilter('All')}>
          All
        </button>

        <button onClick={() => setFilter('Easy')}>
          Easy
        </button>

        <button onClick={() => setFilter('Medium')}>
          Medium
        </button>

        <button onClick={() => setFilter('Hard')}>
          Hard
        </button>
      </div>

      <div className="flashcard-container">
        {filteredCards.map((card) => (
          <Flashcard
            key={card.id}
            term={card.term}
            definition={card.definition}
            difficulty={card.difficulty}
            onFlip={() => handleFlip(card.id)}
          />
        ))}
      </div>

      <footer className="footer">
        <p>⚡ Learn. Flip. Repeat.</p>
        <span>Dev-Term Flashcards © 2026</span>
      </footer>
    </div>
  );
}

export default App;
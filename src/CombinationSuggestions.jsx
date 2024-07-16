
import React from 'react';

const fruits = ['🍎', '🍌', '🍇', '🍉', '🍒', '🍍', '🍑', '🍓', '🥭', '🥝'];

const getRandomCombination = () => {
  const randomIndex1 = Math.floor(Math.random() * fruits.length);
  const randomIndex2 = Math.floor(Math.random() * fruits.length);
  return `${fruits[randomIndex1]} + ${fruits[randomIndex2]}`;
};

const CombinationSuggestions = () => {
  const combinations = Array.from({ length: 5 }, () => getRandomCombination());

  return (
    <div>
      <h2>Ridiculous Combinations</h2>
      <ul>
        {combinations.map((combo, index) => (
          <li key={index}>{combo}</li>
        ))}
      </ul>
    </div>
  );
};

export default CombinationSuggestions;

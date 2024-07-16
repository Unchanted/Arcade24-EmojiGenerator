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
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Ridiculous Combinations</h2>
      <ul className="list-disc">
        {combinations.map((combo, index) => (
          <li key={index} className="text-xl">{combo}</li>
        ))}
      </ul>
    </div>
  );
};

export default CombinationSuggestions;

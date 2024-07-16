import React, { useState } from 'react';

const fruits = ['🍎', '🍌', '🍇', '🍉', '🍒', '🍍', '🍑', '🍓', '🥭', '🥝'];

const getRandomFruit = () => {
  const randomIndex = Math.floor(Math.random() * fruits.length);
  return fruits[randomIndex];
};

const FruitGenerator = () => {
  const [fruit, setFruit] = useState(getRandomFruit());

  const handleGenerate = () => {
    setFruit(getRandomFruit());
  };

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-4">Random Fruit</h2>
      <div className="text-6xl mb-4">{fruit}</div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleGenerate}
      >
        Generate Fruit
      </button>
    </div>
  );
};

export default FruitGenerator;

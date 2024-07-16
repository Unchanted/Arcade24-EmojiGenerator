
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
    <div>
      <h2>Random Fruit</h2>
      <div style={{ fontSize: '2em' }}>{fruit}</div>
      <button onClick={handleGenerate}>Generate Fruit</button>
    </div>
  );
};

export default FruitGenerator;

import React, { useState } from 'react';
import FruitGenerator from './components/FruitGenerator';
import CombinationSuggestions from './components/CombinationSuggestions';

function App() {
  const [showCombinations, setShowCombinations] = useState(false);

  const handleShowCombinations = () => {
    setShowCombinations(!showCombinations);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-8">Ridiculous Fruit Combinations</h1>
      <FruitGenerator />
      <button
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-4"
        onClick={handleShowCombinations}
      >
        {showCombinations ? 'Hide Combinations' : 'Show Combinations'}
      </button>
      {showCombinations && <CombinationSuggestions />}
    </div>
  );
}

export default App;

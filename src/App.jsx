import React from 'react';
import FruitGenerator from './components/FruitGenerator';
import CombinationSuggestions from './components/CombinationSuggestions';

function App() {
  return (
    <div className="App">
      <h1>Ridiculous Fruit Combinations</h1>
      <FruitGenerator />
      <CombinationSuggestions />
    </div>
  );
}

export default App;

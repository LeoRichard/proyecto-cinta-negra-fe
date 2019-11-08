import React from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

import RecetasSection from './components/Receta/recetasSection';
import IngredientsSection from './components/Ingredient/ingredientSection';
function App() {
  return (
    <div className="App">
      <RecetasSection />
      <IngredientsSection />
    </div>
  );
}

export default App;

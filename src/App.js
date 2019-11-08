import React from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

import RecetasSection from './components/Receta/recetasSection';
import IngredientsSection from './components/Ingredient/ingredientSection';
import UsersSection from './components/User/userSection';

function App() {
  return (
    <div className="App">
      <RecetasSection />
      <IngredientsSection />
      <UsersSection />
    </div>
  );
}

export default App;

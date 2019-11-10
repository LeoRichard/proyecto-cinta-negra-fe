import React from 'react';
import RecetasSection from '../Receta/recetasSection';
import IngredientsSection from '../Ingredient/ingredientSection';
import UsersSection from '../User/userSection';

const Home = () => {
  return (
    <div>
      <RecetasSection />
      <hr />
      <IngredientsSection />
      <hr />
      <UsersSection />
    </div>
  );
};

export default Home;

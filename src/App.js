import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

import UserRecetasSection from './components/Receta/userRecetasSection';
import UsersSection from './components/User/userSection';
import UserRegister from './components/User/userRegister';
import RecetasSection from './components/Receta/recetasSection';
import RecetaRegister from './components/Receta/recetaRegister';
import IngredientsSection from './components/Ingredient/ingredientSection';
import IngredientRegister from './components/Ingredient/ingredientRegister';
import NavBar from './components/NavBar';
import Home from './components/Home/index';
import Login from './components/Login/index';

const NotMatch = () => (
  <div>
    <h1 className="mt-5 mb-5">404</h1>
  </div>
);

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/recetas" component={RecetasSection}></Route>
          <Route exact path="/ingredients" component={IngredientsSection}></Route>
          <Route exact path="/users" component={UsersSection}></Route>
          <Route exact path="/new-user" component={UserRegister}></Route>
          <Route exact path="/mis-recetas" component={UserRecetasSection}></Route>
          <Route exact path="/new-receta" component={RecetaRegister}></Route>
          <Route exact path="/new-ingredient" component={IngredientRegister}></Route>
          <Route exact path="/login" component={Login}></Route>
          <Route path="*">
            <NotMatch />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

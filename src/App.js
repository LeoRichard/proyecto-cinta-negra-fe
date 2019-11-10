import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

import RecetasSection from './components/Receta/recetasSection';
import IngredientsSection from './components/Ingredient/ingredientSection';
import UsersSection from './components/User/userSection';
import NavBar from './components/NavBar';
import Home from './components/Home/index';

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
          <Route path="*">
            <NotMatch />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

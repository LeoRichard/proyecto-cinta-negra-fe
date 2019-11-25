import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import Notification from '../Notification';

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

import UserFavoritesSection from '../Favorites/favoritesSection';
import UserRecetasSection from '../Receta/userRecetasSection';
import UsersSection from '../User/userSection';
import UserRegister from '../User/userRegister';
import RecetasSection from '../Receta/recetasSection';
import RecetaRegister from '../Receta/recetaRegister';
import IngredientsSection from '../Ingredient/ingredientSection';
import IngredientRegister from '../Ingredient/ingredientRegister';
import NavBar from '../NavBar';
import Home from '../Home';
import Login from '../Login';
import LogOut from '../Logout';

const NotMatch = () => (
  <div className="notfound">
    404 NOT FOUND
  </div>
);

function RouterComponent({ loginState, handleLogin }) {
  return (
    <Router>

      <NavBar loginState={loginState} />
      <Notification />

      <Switch>

        {/* Private Routes */}
        <PrivateRoute exact path="/users" loginState={loginState} component={() => <UsersSection />} />
        <PrivateRoute exact path="/new-user" loginState={loginState} component={() => <UserRegister />} />
        <PrivateRoute exact path="/mis-favoritos" loginState={loginState} component={() => <UserFavoritesSection />} />
        <PrivateRoute exact path="/mis-recetas" loginState={loginState} component={() => <UserRecetasSection />} />
        <PrivateRoute exact path="/new-receta" loginState={loginState} component={() => <RecetaRegister />} />
        <PrivateRoute exact path="/new-ingredient" loginState={loginState} component={() => <IngredientRegister />} />
        <PrivateRoute path="/logout" loginState={loginState} component={() => <LogOut handleLogin={handleLogin} />} />

          {/* Public Routes */}
          <PublicRoute exact path="/" component={() => <Home />} />
          <PublicRoute path="/recetas" component={() => <RecetasSection />} />
          <PublicRoute path="/ingredients" component={() => <IngredientsSection />} />
          <PublicRoute path="/login" component={() => <Login handleLogin={handleLogin} />} />
          <PublicRoute path="*" component={() => <NotMatch />} />

      </Switch>

    </Router>
  );
}

export default RouterComponent;

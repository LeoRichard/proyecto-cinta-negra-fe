import React from "react";

import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a class="navbar-brand" href="#">WhatCanICook?</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item">
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li class="nav-item">
              <Link to="/recetas" className="nav-link">Recetas</Link>
            </li>
            <li class="nav-item">
              <Link to="/ingredients" className="nav-link">Ingredients</Link>
            </li>
            <li class="nav-item">
              <Link to="/users" className="nav-link">Users</Link>
            </li>
          </ul>
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
                <Link to="/login" className="nav-link">Login</Link>
            </li>
        </ul>
        </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;

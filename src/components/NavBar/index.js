import React from "react";

import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" href="/">WhatCanICook?</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link">Home</Link>
            </li>

            <li class="nav-item dropdown">
              <Link to="/recetas" className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Recetas</Link>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link to="/recetas" className="dropdown-item">Explorar Recetas</Link>
                <Link to="/new-receta" className="dropdown-item">Crear Receta</Link>
                <div class="dropdown-divider"></div>
                <Link to="/mis-recetas" className="dropdown-item">Mis Recetas</Link>
              </div>
            </li>

            <li className="nav-item dropdown">
              <Link to="/ingredients" className="nav-link dropdown-toggle" href="#" id="navbarDropdown2" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Ingredientes</Link>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown2">
                <Link to="/ingredients" className="dropdown-item">Explorar Ingredientes</Link>
                <Link to="/new-ingredient" className="dropdown-item">Crear Ingrediente</Link>
              </div>
            </li>
            <li className="nav-item dropdown">
              <Link to="/users" className="nav-link dropdown-toggle" href="#" id="navbarDropdown3" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Usuarios</Link>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown3">
                  <Link to="/users" className="dropdown-item">Usuarios</Link>
                  <Link to="/new-user" className="dropdown-item">Crear Usuario</Link>
                </div>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
                <Link to="/login" className="nav-link">Iniciar Sesión</Link>
            </li>
        </ul>
        </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;

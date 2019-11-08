import React from 'react';

import logo from '../logo.svg';

const Receta = ({ name, difficulty }) => {
  return (
    <div className="col-lg-3 card mt-4 mb-4">
      <img src={logo} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{difficulty}</p>
        <a href="#" className="btn btn-primary">Read More</a>
      </div>
    </div>
  );
};

export default Receta;

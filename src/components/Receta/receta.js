import React from 'react';

import logo from '../../logo.svg';

const Receta = ({ name, difficulty, content, author }) => {
  return (
    <div className="col-lg-3 card mt-4 mb-4">
      <div className="featured-image">
        <img src={logo} className="card-img-top" alt="..." />
        <div className="tags absolute"><a href="https://thenebulahippo.com/category/universe/" className="tag-link-7">{difficulty}</a></div>
      </div>
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{content}</p>
        <p><strong>{author}</strong></p>
        <a href="http://google.com" className="btn btn-primary">Read More</a>
      </div>
    </div>
  );
};

export default Receta;

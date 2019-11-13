import React from 'react';

import logo from '../../logo.svg';

const Receta = ({ name, difficulty, content, author, profileImage }) => {
  return (
    <div className="col-lg-3 card mt-4 mb-4 pl-0 pr-0">
      <div className="featured-image">
        <img src={logo} className="card-img-top" alt="..." />
        <div className="tags absolute"><a href="#" className="tag-link-7">{difficulty}</a></div>
      </div>
      <div className="card-body gradient-effect">
        <a href="#">
          <h5 className="card-title">{name}</h5>
        </a>
        <p className="card-text">{content}</p>
      </div>
      <div className="card-footer author-meta">
        <a href="#" className="author" title="Richard Leo">
          <span className="author-image cover" style={{backgroundImage: `url(${profileImage})`}}></span>
          <span className="author-name">{author}</span>
          </a>
      </div>
    </div>
  );
};

export default Receta;

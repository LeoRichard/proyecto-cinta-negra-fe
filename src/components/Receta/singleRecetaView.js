import React from 'react';

const SingleRecetaView = ({ recetaID, name, content, difficulty, featuredImage }) => {
  return (
    <div className="row">
      <div className="col">
      <img src={featuredImage} alt={name} />
        <h1>{name}</h1>
        <p>{content}</p>
        <p>{difficulty}</p>
      </div>
    </div>
  );
};

export default SingleRecetaView;

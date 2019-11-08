import React from 'react';

const Ingredient = ({name}) => {
  return (
      <button className="btn btn-primary mr-2">{name}</button>
  );
};

export default Ingredient;

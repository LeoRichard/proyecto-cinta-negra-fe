import React from 'react';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

const ADD_FAVORITE = gql`
  mutation addFavoriteFunction($recetaID: String) {
    addFavorite(recetaID: $recetaID ) {
      name
    }
  }
`;

const AddFavorite = (receta) => {

  const [addFavorite] = useMutation(ADD_FAVORITE, {
    variables: {
        recetaID: receta.recetaID,
    }
  });

  return (
    <div className="favoriteIcon">
      <button onClick={addFavorite}><FontAwesomeIcon icon={faHeart} size="lg" color="#d2d2d2" /></button>
    </div>
  );
};


export default AddFavorite;

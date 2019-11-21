import React from 'react';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

const USER_FAVORITES = gql`
  query {
    getUserRecetas {
      favorites {
       _id
       name
       content
       difficulty
       featuredImage
       author {
         name
         profileImage
       }
     }
     name
     profileImage
   }
  }
`;

const ADD_FAVORITE = gql`
  mutation addFavoriteFunction($recetaID: String) {
    addFavorite(recetaID: $recetaID ) {
      favorites {
       _id
       name
       content
       difficulty
       featuredImage
     }
     name
     profileImage
    }
  }
`;

const AddFavorite = (receta) => {

  const [addFavorite] = useMutation(
    ADD_FAVORITE, {
      variables: { recetaID: receta.recetaID },
      update(store, {data: addFavorite }) {
        const data = store.readQuery({ query: USER_FAVORITES, variables: {recetaID: receta.recetaID} });
        console.log("TCL: AddFavorite -> render -> data", data)
        data.getUserRecetas.favorites.unshift(addFavorite);
        store.writeQuery({ query: USER_FAVORITES, variables: {recetaID: receta.recetaID}, data });
    }}
  );

  return (
    <div className="favoriteIcon">
      <button onClick={addFavorite}><FontAwesomeIcon icon={faHeart} size="lg" color="#d2d2d2" /></button>
    </div>
  );
};


export default AddFavorite;

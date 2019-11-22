import React from 'react';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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

const REMOVE_FAVORITE = gql`
  mutation removeFavoriteFunction($recetaID: String) {
    removeFavorite(recetaID: $recetaID ) {
      favorites {
        _id
        name
      }
    }
  }
`;

const notifyDelete = () => toast.success("Receta eliminada de favoritos");

const DeleteFavorite = (receta) => {

  const [removeFavorite] = useMutation(
    REMOVE_FAVORITE, {
    variables: { recetaID: receta.recetaID },
    update(store, { data: removeFavorite}) {
      const data = store.readQuery({ query: USER_FAVORITES, variables: {recetaID: receta.recetaID} });
      //console.log("TCL: DeleteFavorite -> render -> data", data)
      data.getUserRecetas.favorites.forEach((favorite, index) => {
        if(favorite._id === receta.recetaID) {
          data.getUserRecetas.favorites.splice(index, 1);
        }
      });

      store.writeQuery({ query: USER_FAVORITES, variables: {recetaID: receta.recetaID}, data });
    }
  });

  return (
    <div className="favoriteIcon">
      <button onClick={() => {removeFavorite(); notifyDelete()}}><FontAwesomeIcon icon={faTrashAlt} size="lg" color="#d2d2d2" /></button>
    </div>
  );
};


export default DeleteFavorite;

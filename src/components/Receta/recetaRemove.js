import React from 'react';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const USER_RECETAS = gql`
  query {
    getUserRecetas {
      recetas {
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

const RECETAS = gql`
  query {
    getAllRecetas {
      _id
     name
    }
  }
`;

const REMOVE_RECETA = gql`
  mutation removeRecetaFunction($recetaID: String) {
    removeReceta(recetaID: $recetaID ) {
      _id
      name
    }
  }
`;

const notifyDelete = () => toast.success("Receta eliminada.");

const RemoveReceta = (receta) => {

  const [removeReceta] = useMutation(
    REMOVE_RECETA, {
    variables: { recetaID: receta.recetaID },
    update(store, { data: removeReceta}) {

      // User Recetas
      const data = store.readQuery({ query: USER_RECETAS, variables: {recetaID: receta.recetaID} });

      data.getUserRecetas.recetas.forEach((recetaItem, index) => {
        if(recetaItem._id === receta.recetaID) {
          console.log("Receta to be deleted found!");
          data.getUserRecetas.recetas.splice(index, 1);
        }
      });

      store.writeQuery({ query: USER_RECETAS, variables: {recetaID: receta.recetaID}, data });
    },
    refetchQueries: [{ query: RECETAS}]
  });

  return (
    <div className="favoriteIcon">
      <button className="removeReceta" onClick={() => {removeReceta(); notifyDelete()}}><FontAwesomeIcon icon={faTrashAlt} size="lg" color="#d2d2d2" /></button>
    </div>
  );
};


export default RemoveReceta;

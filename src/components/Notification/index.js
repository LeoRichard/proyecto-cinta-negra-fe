import React from 'react';
import { Subscription } from 'react-apollo';
import gql from 'graphql-tag';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RECETA_ADDED = gql`
subscription {
  recetaAdded {
    _id
    name
  }
}
`;

const FAVORITE_ADDED = gql`
subscription {
  favoriteAdded {
    favorites {
      name
    }
  }
}
`;

class Notification extends React.Component {

  notify = ({recetaAdded}) => toast.success(`${recetaAdded.name}, publicada con éxito!`);
  notifyFavorite = ({favoriteAdded}) => toast.success(`Receta added to favorites!`);

  render() {
    return (
      <>
        <Subscription subscription={RECETA_ADDED}>
          {
            ({ data }) => {
              if (data) this.notify(data);
              return <ToastContainer />;
            }
          }
        </Subscription>
        <Subscription subscription={FAVORITE_ADDED}>
          {
            ({ data }) => {
              if (data) this.notifyFavorite(data);
              return <ToastContainer />;
            }
          }
        </Subscription>
      </>
    );
  }

}

export default Notification;

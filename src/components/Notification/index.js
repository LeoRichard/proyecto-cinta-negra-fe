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

class Notification extends React.Component {

  notify = ({recetaAdded}) => toast.success(`${recetaAdded.name}, publicada con éxito!`);

  render() {
    return (
      <Subscription subscription={RECETA_ADDED}>
        {
          ({ data }) => {
            if (data) this.notify(data);
            return <ToastContainer />;
          }
        }
      </Subscription>
    );
  }

}

export default Notification;

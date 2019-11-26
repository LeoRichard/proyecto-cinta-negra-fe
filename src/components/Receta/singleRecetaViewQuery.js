import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import SingleRecetaView from './singleRecetaView';

const SINGLE_RECETA = gql`
  query getRecetaFunction($recetaID: String) {
    getReceta(recetaID: $recetaID) {
      _id
      name
      content
      difficulty
      featuredImage
    }
  }
`;

const SingleRecetaQuery = (receta) => {
  return (
    <Query query={SINGLE_RECETA} variables={{ recetaID: receta.id}}>
      {
        ({loading, error, data}) => {
          if (loading) return <p>Loading..</p>
          if (error) return <p>Algo salio mal</p>

          return (
            <SingleRecetaView
              recetaid={data.getReceta._id}
              name={data.getReceta.name}
              content={data.getReceta.content}
              difficulty={data.getReceta.difficulty}
              featuredImage={data.getReceta.featuredImage}
            />
          );
        }
      }
    </Query>
  );
};

export default SingleRecetaQuery;

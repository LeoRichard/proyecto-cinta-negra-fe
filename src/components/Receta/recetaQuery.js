import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import Receta from './receta';

const RECETAS = gql`
  {
    getAllRecetas {
     name
     difficulty
    }
  }

`;

const RecetasQuery = () => {
  return (
    <div>
      <h2>Receta List</h2>
      <Query query={RECETAS}>
        {
          ({ loading, error, data}) => {
            if (loading) return <p>Loading..</p>
            if (error) return <p>Algo salio mal</p>

            return (
              <div className="container">
              <div className="row">
                {
                  data.getAllRecetas.map((recetaItem, index) => (
                    <Receta
                      key={index}
                      name={recetaItem.name}
                      difficulty={recetaItem.difficulty}
                    />
                  ))
                }
              </div>
              </div>
            );
          }
        }
        </Query>
    </div>
  );
};

export default RecetasQuery;

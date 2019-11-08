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

const RecetasSection = () => {
  return (
    <div>
      <h2>Receta List</h2>
      <Query query={RECETAS}>
        {
          ({ loading, error, data}) => {
            if (loading) return <p>Loading..</p>
            if (error) return <p>Algo salio mal</p>

            const recetaList = data.getAllRecetas;
            return (
              <div className="container">
              <div className="row">
                {
                  recetaList.map(recetaItem => (
                    <Receta
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

export default RecetasSection;

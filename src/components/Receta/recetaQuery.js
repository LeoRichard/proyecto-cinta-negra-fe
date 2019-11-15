import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import Receta from './receta';

const RECETAS = gql`
  {
    getAllRecetas {
      _id
     name
     difficulty
     content
     author {
       name
       profileImage
     }
     featuredImage
    }
  }

`;

const RecetasQuery = () => {
  return (
    <div className="mt-5 mb-5">
      <h2>Receta List</h2>
      <Query query={RECETAS}>
        {
          ({ loading, error, data}) => {
            if (loading) return <p>Loading..</p>
            if (error) return <p>Algo salio mal</p>

            return (
              <div className="container mt-4">
              <div className="row">
                {
                  data.getAllRecetas.map((recetaItem, index) => (
                    <Receta
                      key={index}
                      recetaid={recetaItem._id}
                      name={recetaItem.name}
                      difficulty={recetaItem.difficulty}
                      content={recetaItem.content}
                      author={recetaItem.author.map(author => (
                        author.name
                      ))}
                      profileImage={recetaItem.author.map(author => (
                        author.profileImage
                      ))}
                      featuredImage={recetaItem.featuredImage}
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

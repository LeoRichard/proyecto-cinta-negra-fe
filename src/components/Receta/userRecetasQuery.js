import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import Receta from './receta';

const USER_RECETAS = gql`
  {
    getUserRecetas {
      recetas {
       name
       content
       difficulty
     }
     name
     profileImage
   }
  }
`;

const UserRecetasQuery = () => {
  return (
    <div className="mt-5 mb-5">
      <h2>Receta List</h2>
      <Query query={USER_RECETAS}>
        {
          ({ loading, error, data}) => {
            if (loading) return <p>Loading..</p>
            if (error) return <p>Algo salio mal</p>
            const { recetas } = data.getUserRecetas;
            console.log(recetas);
            return (
              <div className="container">
              <div className="row">
                {
                  data.getUserRecetas.recetas.map((userItem, index) => (
                    <Receta
                      key={index}
                      name={userItem.name}
                      difficulty={userItem.difficulty}
                      content={userItem.content}
                      author={data.getUserRecetas.name}
                      profileImage={data.getUserRecetas.profileImage}
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

export default UserRecetasQuery;

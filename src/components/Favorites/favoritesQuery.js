import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import Receta from '../Receta/receta';

const USER_FAVORITES = gql`
  {
    getUserRecetas {
      favorites {
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

const UserFavoritesQuery = () => {
  return (
    <div className="mt-5 mb-5">
      <h2 className="text-center">Mis Favoritos</h2>
      <Query query={USER_FAVORITES}>
        {
          ({ loading, error, data}) => {
            if (loading) return <p>Loading..</p>
            if (error) return <p>Algo salio mal</p>

            return (
              <div className="container mt-4">
              <div className="row">
                {
                  data.getUserRecetas.favorites.map((userItem, index) => (
                    <Receta
                      key={index}
                      name={userItem.name}
                      difficulty={userItem.difficulty}
                      content={userItem.content}
                      author={userItem.author.map(author => (
                          author.name
                      ))}
                      profileImage={userItem.author.map(author => (
                          author.profileImage
                      ))}
                      featuredImage={userItem.featuredImage}
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

export default UserFavoritesQuery;

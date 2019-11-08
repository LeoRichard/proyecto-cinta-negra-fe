import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import User from './user';

const USERS = gql`
  {
    users {
     name
     email
     isActive
    }
  }

`;

const UsersQuery = () => {
  return (
    <div className="mt-5 mb-5">
      <h2>User List</h2>
      <Query query={USERS}>
        {
          ({ loading, error, data}) => {
            if (loading) return <p>Loading..</p>
            if (error) return <p>Algo salio mal</p>

            return (
              <div className="container">
              <div className="row">
                <table className="table">
                  <th>Name</th>
                  <th>Email</th>
                  <th>Active</th>
                  {
                    data.users.map((userItem, index) => (
                      <User
                        key={index}
                        name={userItem.name}
                        email={userItem.email}
                        isActive={userItem.isActive}
                      />
                    ))
                  }
                </table>
              </div>
              </div>
            );
          }
        }
        </Query>
    </div>
  );
};

export default UsersQuery;

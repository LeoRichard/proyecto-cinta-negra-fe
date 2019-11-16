import React from 'react';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';
import { Redirect } from 'react-router-dom';

import UserForm from './userForm';

const ADD_USER = gql`
  mutation mySignup($data: UserInput) {
    addUser(data: $data) {
      token
    }
  }
`;

class UserRegister extends React.Component {
  render() {
    return (
      <div>
        <Mutation mutation={ADD_USER}>
          {
            (addUser, { data, error, loading }) => {
              if (data && data.addUser) {
                localStorage.setItem('jwt', data.addUser.token);
                return <Redirect to="/posts" />
              }

              return <UserForm
                error={error}
                loading={loading}
                addUserMutation={addUser}
              />
            }
          }
        </Mutation>
      </div>
    );
  }
}

export default UserRegister;

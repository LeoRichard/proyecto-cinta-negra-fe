import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

const LOGIN_STATE = gql`
  query {
    loginState @client {
      userLogged
    }
  }
`;

const LoginState = ({ children }) => (
  <Query query={LOGIN_STATE}>
    {
      ({ data }) => {
        return React.Children.map(children, function (child) {
          return React.cloneElement(child, data);
        })
      }
    }
  </Query>
);

export default LoginState;

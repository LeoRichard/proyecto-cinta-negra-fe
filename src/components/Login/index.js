import React from "react";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import { Redirect } from "react-router-dom";

import LoginForm from "./loginForm";

const LOGIN = gql`
  mutation loginFunction($userName: String, $password: String) {
    doLogin(userName: $userName, password: $password) {
      token
    }
  }
`;

class Login extends React.Component {
  setToken = token => {
    const {handleLogin} = this.props;
    if (token) {
      localStorage.setItem("jwt", token);
      handleLogin(true);
    }
  };

  render() {
    const { handleLogin } = this.props;
    return (
      <div>
        <Mutation mutation={LOGIN}>
          {(doLogin, { data, error, loading }) => {
            if (data && data.doLogin) {
              this.setToken(data.doLogin.token);
              return <Redirect to="/" />;
            }
            return <LoginForm doLogin={doLogin} handleLogin={handleLogin} loading={loading} />;
          }}
        </Mutation>
      </div>
    );
  }
}
export default Login;

import React from 'react';
import client from './Apollo';
import gql from 'graphql-tag';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

import RouterComponent from './components/Router';
import LoginState from './components/Login/LoginState';

class App extends React.Component {

  componentDidMount() {
    const token = localStorage.getItem('jwt');
    if (token) this.handleLogin(true);
  }

  // se ejecuta al cambiar un state o los props
  componentDidUpdate() {}

  // esto se ejecuta antes de borrar el componente en el DOM
  componentWillUnmount() {}

  handleLogin(userLogged = true) {
  client.mutate({
    mutation: gql`
      mutation setUserLoggedFunction($stateLogged: Boolean) {
        setUserLogged(logged: $stateLogged) @client {
          data
        }
      }
    `,
    variables: { stateLogged: userLogged }
  })
}

  render() {
    return (
      <div className="App">
        <LoginState>
          <RouterComponent handleLogin={this.handleLogin} />
        </LoginState>
      </div>
    );
  }
}

export default App;

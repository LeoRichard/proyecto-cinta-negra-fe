import React from 'react';
import { Redirect } from 'react-router-dom';

class LogOut extends React.Component {

  componentDidMount() {
    localStorage.removeItem('jwt');
    this.props.handleLogin(false);
  }

  render() {
    return (
      <Redirect to="/" />
    );
  }
}

export default LogOut;

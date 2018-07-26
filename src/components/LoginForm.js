import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from "react-router-dom";

import { loginUser, logoutUser } from '../actions';

const mapStateToProps = state => ({
  isAuthenticated: state.loginReducer.isAuthenticated
});

const mapDispatchToProps = dispatch => ({
  loginUser: () => dispatch(loginUser()),
  logoutUser: () => dispatch (logoutUser())
});


class LoginForm extends Component {
  login = () => {
    const { pathname } = this.props.location.state.from;
    
    this.props.loginUser();
    this.props.history.push(pathname);
  }

  logout = () => {
    this.props.logoutUser();
    this.props.history.push('/');
  }

  render() {
    const { isAuthenticated } = this.props;

    return (
      <Fragment>
        <h3>Please login</h3>
        <button onClick={isAuthenticated ? this.logout : this.login}>
          {isAuthenticated ? 'Logout' : 'Login'}
        </button>
      </Fragment>
    );
  }
};

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(LoginForm);
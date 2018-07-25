import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import { loginUser, logoutUser } from '../actions';

const mapStateToProps = state => ({
  isAuthenticated: state.loginReducer.isAuthenticated
});

const mapDispatchToProps = dispatch => ({
  loginUser: () => dispatch(loginUser()),
  logoutUser: () => dispatch (logoutUser())
});

const LoginForm = props => {
  return (
    <Fragment>
      <h3>Please login</h3>
      <button onClick={props.isAuthenticated ? props.logoutUser : props.loginUser}>
        {props.isAuthenticated ? 'Logout' : 'Login'}
      </button>
    </Fragment>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
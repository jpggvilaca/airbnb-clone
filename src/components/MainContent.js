import React, { Component } from 'react';
import { Route, withRouter } from "react-router-dom";
import styled from 'styled-components';
import { connect } from 'react-redux';
import { compose } from 'redux';

import { routes } from '../routes';

import PrivateRoute from './PrivateRoute';

const StyleMainContent = styled.main`
  margin: 0 auto;
  max-width: 1024px;
  padding-top: 60px;
`;

const mapStateToProps = state => ({
  isAuthenticated: state.loginReducer.isAuthenticated
});

class MainContent extends Component {
  renderRoutes = () => {
    const { isAuthenticated } = this.props;

    return (
      routes.map((route, index) => (
        route.isProtected
          ? <PrivateRoute
              isAuthenticated={isAuthenticated}
              key={index}
              path={route.path}
              exact={route.exact}
              isProtected={route.isProtected}
              component={route.component}
            />
          : <Route
              key={index}
              path={route.path}
              exact={route.exact}
              isProtected={route.isProtected}
              component={route.component}
            />
      ))
    );
  }

  render() {
    return (
      <StyleMainContent>
        { this.renderRoutes() }
      </StyleMainContent>
    );
  }
};

export default compose(
  withRouter,
  connect(mapStateToProps, null)
)(MainContent);
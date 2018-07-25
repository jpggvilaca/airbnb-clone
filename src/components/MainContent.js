import React, { Component } from 'react';
import { Route } from "react-router-dom";
import { routes } from '../routes';
import PrivateRoute from './PrivateRoute';
import styled from 'styled-components';

const StyleMainContent = styled.main`
  margin: 0 auto;
  max-width: 1024px;
  padding-top: 60px;
`;

class MainContent extends Component {
  state = { isAuthenticated: false };

  authenticate = () => {
    this.setState({ isAuthenticated: true });
    setTimeout(null, 100); // fake async
  }

  signout = () => {
    this.setState({ isAuthenticated: false });
    setTimeout(null, 100);
  }

  renderRoutes = () => {
    const { isAuthenticated } = this.state;

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

export default MainContent;
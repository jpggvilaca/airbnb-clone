import React, { Component } from 'react';
import { Route } from "react-router-dom";
import { routes } from '../routes';
import styled from 'styled-components';

const StyleMainContent = styled.main`
  margin: 0 auto;
  max-width: 1024px;
  padding-top: 60px;
`;

export default class MainContent extends Component {
  state = { isProtected: false };

  renderRoutes = () => {
    return (
      routes.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          exact={route.exact}
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
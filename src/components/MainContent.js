import React from 'react';
import { Route } from "react-router-dom";
import { routes } from '../routes';

const MainContent = () => (
  routes.map((route, index) => (
    <Route
      key={index}
      path={route.path}
      exact={route.exact}
      component={route.component}
    />
  ))
);

export default MainContent;
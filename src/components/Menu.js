import React, { Fragment } from 'react';
import { Route, Link } from "react-router-dom";
import { routes } from '../routes'; // TODO: alias for home

const Menu = () => (
  <Fragment>
    <ul>
      {routes.map((route, index) => (
        <Link key={index} to={route.path}>{route.name}</Link>
      ))}
    </ul>

    {routes.map((route, index) => (
      <Route
        key={index}
        path={route.path}
        exact={route.exact}
        component={route.component}
      />
    ))}
  </Fragment>
);

export default Menu;
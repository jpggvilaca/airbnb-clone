import React from 'react';
import { Link } from "react-router-dom";
import { routes } from '../routes'; // TODO: alias for home

const Menu = () => (
  <ul>
    {routes.map((route, index) => (
      <Link key={index} to={route.path}>{route.name}</Link>
    ))}
  </ul>
);

export default Menu;
import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';

const NavBar = styled.ul`
  align-items: center;
  background-color: #d4d4d4;
  font-size: 20px;
  padding: 20px 10px;
  height: 70px;
`;

const StyledLink = styled(Link)`
  margin: 0 10px;
`;

import { routes } from '../routes'; // TODO: alias for home

const Menu = () => (
  <NavBar>
    {routes.map((route, index) => (
      <StyledLink key={index} to={route.path}>{route.name}</StyledLink>
    ))}
  </NavBar>
);

export default Menu;
import React, { Component } from "react";
import styled from 'styled-components';

import HouseCard from './HouseCard';

import { houses } from '../data'; // mock data, temporary

const StyledHouses = styled.ul`
  display: flex;
  justify-content: space-between;
  padding-left: 30px;
`;

export default class Houses extends Component {
  render() {
    return (
      <StyledHouses>
        {houses.map((house, i) => <HouseCard key={`house-${i}`} house={house} />)}
      </StyledHouses>
    );
  }
}
import React, { Component } from "react";
import styled from 'styled-components';

const StyledListItem = styled.li`
  flex: 0 1 33%;
`;

export default class HouseCard extends Component {
  render() {
    const { id, name, location, photos, pricePerNight } = this.props.house;

    return [
      <StyledListItem key={`1-${id}`}>{name}</StyledListItem>,
      <StyledListItem key={`2-${id}`}>{location}</StyledListItem>,
      <StyledListItem key={`3-${id}`}>{pricePerNight}</StyledListItem>
    ];
  }
}

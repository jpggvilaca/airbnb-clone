import React, { Component } from "react";
import styled from 'styled-components';

const Avatar = styled.div`
  background-image: url('https://placeimg.com/80/60/any');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 60px;
  width: 80px;
`;

export default class Profile extends Component {
  render() {
    return (
      <div>
        <Avatar />
      </div>
    );
  }
}
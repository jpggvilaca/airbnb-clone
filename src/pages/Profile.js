import React, { Component } from "react";
import styled from 'styled-components';

import ProfileForm from '../components/ProfileForm';
import Avatar from '../components/Avatar';

import { users } from '../data'; // mock data, temporary

const StyledProfile = styled.div`
  padding-left: 30px;
  height: calc(100vh - 70px - 60px); /* 60px from main, and 70px from menu */
`;

export default class Profile extends Component {
  render() {
    return (
      <StyledProfile>
        <Avatar avatar={users[0].avatar} />
        <ProfileForm />
      </StyledProfile>
    );
  }
}
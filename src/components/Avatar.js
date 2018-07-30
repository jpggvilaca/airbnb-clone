import React from 'react';
import styled from 'styled-components';

const StyledAvatar = styled.div`
  background-image: url(${props => props.avatar});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 60px;
  width: 80px;
`;

const Avatar = props => <StyledAvatar {...props} />;

export default Avatar;
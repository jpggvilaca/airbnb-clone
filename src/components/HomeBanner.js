import React from 'react';
import styled from 'styled-components';

const StyledHomeBanner = styled.div`
  height: ${props => props.height || '250px'};
  background-image: url('https://placeimg.com/1024/250/any');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
`;

const HomeBanner = props => <StyledHomeBanner {...props} />;

export default HomeBanner;
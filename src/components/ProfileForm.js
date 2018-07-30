import React from 'react';
import styled from 'styled-components';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const StyledInput = styled.input`
  width: 280px;
`;

const StyledLabel = styled.label`
  margin-top: 20px;
`;

const ProfileForm = props => (
  <StyledForm>
    <StyledLabel htmlFor="name">Name</StyledLabel>
    <StyledInput placeholder='Name' />
    <StyledLabel htmlFor="date">Date of birth</StyledLabel>
    <StyledInput type='date' />
    <StyledLabel htmlFor="age">Age</StyledLabel>
    <StyledInput placeholder='Age' type='number' />
    <StyledLabel htmlFor="location">Location</StyledLabel>
    <StyledInput placeholder='Location' />
  </StyledForm>
);

export default ProfileForm;
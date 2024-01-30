import { Item, StyledNavLink, Text } from 'components/Header/Header.styled';
import React from 'react';
import { DiAndroid } from 'react-icons/di';

export const AuthNav = () => {
  return (
    <>
      <Item>
        <StyledNavLink to="register">
          <DiAndroid />
          <Text>Register</Text>
        </StyledNavLink>
      </Item>
      <Item>
        <StyledNavLink to="login">
          <DiAndroid />
          <Text>Login</Text>
        </StyledNavLink>
      </Item>
    </>
  );
};

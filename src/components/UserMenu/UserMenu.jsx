import { Item, StyledNavLink, Text } from 'components/Header/Header.styled';
import React from 'react';
import { DiAndroid } from 'react-icons/di';

export const UserMenu = () => {
  return (
    <>
      <Item>
        <StyledNavLink to="todo">
          <DiAndroid />
          <Text>Todo</Text>
        </StyledNavLink>
      </Item>
      <Item>
        <StyledNavLink to="image">
          <DiAndroid />
          <Text>ImageGallery</Text>
        </StyledNavLink>
      </Item>
      <Item>
        <StyledNavLink to="points">
          <DiAndroid />
          <Text>Points</Text>
        </StyledNavLink>
      </Item>
      <Item>
        <StyledNavLink to="props">
          <DiAndroid />
          <Text>Props</Text>
        </StyledNavLink>
      </Item>
      <Item>
        <StyledNavLink to="cocktails">
          <DiAndroid />
          <Text>Cocktails</Text>
        </StyledNavLink>
      </Item>
      <Item>
        <StyledNavLink to="searchcocktails">
          <DiAndroid />
          <Text>Search</Text>
        </StyledNavLink>
      </Item>
    </>
  );
};

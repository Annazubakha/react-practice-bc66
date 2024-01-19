import { Loader } from 'components/Loader/Loader';
import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import {
  Indicator,
  List,
  Nav,
  StyledHeader,
  Text,
  Item,
} from './Header.styled';

export const Header = () => {
  return (
    <>
      <StyledHeader>
        <Nav>
          <List>
            <Item>
              <NavLink to="/">
                <Text>Home</Text>
              </NavLink>
            </Item>
            <Item>
              <NavLink to="todo">
                <Text>Todo</Text>
              </NavLink>
            </Item>
            <Item>
              <NavLink to="image">
                <Text>ImageGallery</Text>
              </NavLink>
            </Item>
            <Item>
              <NavLink to="points">
                <Text>Points</Text>
              </NavLink>
            </Item>
            <Item>
              <NavLink to="props">
                <Text>Props</Text>
              </NavLink>
            </Item>

            <Item>
              <NavLink to="cocktails">
                <Text>Cocktails</Text>
              </NavLink>
            </Item>
            <Item>
              <NavLink to="searchcocktails">
                <Text>Search Cocktails</Text>
              </NavLink>
            </Item>
            <Indicator />
          </List>
        </Nav>
      </StyledHeader>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

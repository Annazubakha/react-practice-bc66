import { Loader } from 'components/Loader/Loader';
import { Suspense, useState } from 'react';
import { Outlet } from 'react-router-dom';
import {
  List,
  Nav,
  StyledHeader,
  Text,
  Item,
  StyledNavLink,
} from './Header.styled';
import { DiAndroid } from 'react-icons/di';

export const Header = () => {
  const [selectedItem, setSelectedItem] = useState(0);

  return (
    <>
      <StyledHeader>
        <Nav>
          <List $selectedItem={selectedItem}>
            <Item>
              <StyledNavLink to="/" onClick={() => setSelectedItem(0)}>
                <DiAndroid />
                <Text>Home</Text>
              </StyledNavLink>
            </Item>
            <Item>
              <StyledNavLink to="register" onClick={() => setSelectedItem(1)}>
                <DiAndroid />
                <Text>Register</Text>
              </StyledNavLink>
            </Item>
            <Item>
              <StyledNavLink to="login" onClick={() => setSelectedItem(2)}>
                <DiAndroid />
                <Text>Login</Text>
              </StyledNavLink>
            </Item>
            <Item>
              <StyledNavLink to="todo" onClick={() => setSelectedItem(3)}>
                <DiAndroid />
                <Text>Todo</Text>
              </StyledNavLink>
            </Item>
            <Item>
              <StyledNavLink to="image" onClick={() => setSelectedItem(4)}>
                <DiAndroid />
                <Text>ImageGallery</Text>
              </StyledNavLink>
            </Item>
            <Item>
              <StyledNavLink to="points" onClick={() => setSelectedItem(5)}>
                <DiAndroid />
                <Text>Points</Text>
              </StyledNavLink>
            </Item>
            <Item>
              <StyledNavLink to="props" onClick={() => setSelectedItem(6)}>
                <DiAndroid />
                <Text>Props</Text>
              </StyledNavLink>
            </Item>

            <Item>
              <StyledNavLink to="cocktails" onClick={() => setSelectedItem(5)}>
                <DiAndroid />
                <Text>Cocktails</Text>
              </StyledNavLink>
            </Item>
            <Item>
              <StyledNavLink
                to="searchcocktails"
                onClick={() => setSelectedItem(6)}
              >
                <DiAndroid />
                <Text>Search</Text>
              </StyledNavLink>
            </Item>
          </List>
        </Nav>
      </StyledHeader>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

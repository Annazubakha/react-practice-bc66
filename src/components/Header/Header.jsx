import { Loader } from "components/Loader/Loader";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import {
  Indicator,
  List,
  Nav,
  StyledHeader,
  Text,
  Item,
  StyledNavLink,
} from "./Header.styled";
import { DiAndroid } from "react-icons/di";

export const Header = () => {
  return (
    <>
      <StyledHeader>
        <Nav>
          <List>
            <Item>
              <StyledNavLink to="/">
                <DiAndroid />
                <Text>Home</Text>
              </StyledNavLink>
            </Item>
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
            <Indicator className="indicator" />
          </List>
        </Nav>
      </StyledHeader>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

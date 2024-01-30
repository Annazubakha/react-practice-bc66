import { Loader } from 'components/Loader/Loader';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import {
  List,
  Nav,
  StyledHeader,
  Text,
  Item,
  StyledNavLink,
  Indicator,
} from './Header.styled';
import { DiAndroid } from 'react-icons/di';
import { useDispatch, useSelector } from 'react-redux';
import { userLogout } from 'myRedux/auth/operations';
import { selectIsLoggedIn } from 'myRedux/auth/selectors';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { AuthNav } from 'components/AuthNav/AuthNav';

export const Header = () => {
  const dispatch = useDispatch();

  const isLoggedIn = useSelector(selectIsLoggedIn);

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
            {isLoggedIn ? <UserMenu /> : <AuthNav />}
            <Indicator className="indicator" />
          </List>
        </Nav>
        {isLoggedIn && (
          <button onClick={() => dispatch(userLogout())}>Logout</button>
        )}
      </StyledHeader>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

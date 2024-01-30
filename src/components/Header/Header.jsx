import { Loader } from 'components/Loader/Loader';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import {
  List,
  Nav,
  StyledHeader,
  Text,
  Item,
  StyledNavLink,
  Indicator,
  LogoutButton,
} from './Header.styled';
import { DiAndroid } from 'react-icons/di';
import { IoIosLogOut } from 'react-icons/io';
import { userLogout } from 'myRedux/auth/operations';
import { selectIsLoggedIn, selectUser } from 'myRedux/auth/selectors';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { AuthNav } from 'components/AuthNav/AuthNav';

export const Header = () => {
  const dispatch = useDispatch();

  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);

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
          <div>
            <p>Welcome, {user.name}</p>
            <LogoutButton onClick={() => dispatch(userLogout())}>
              Logout <IoIosLogOut />
            </LogoutButton>
          </div>
        )}
      </StyledHeader>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

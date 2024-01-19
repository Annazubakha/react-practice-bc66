import { NavLink } from "react-router-dom";
import { styled } from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  padding: 40px 0;
  background: ${({ theme }) => theme.colors.blue};
`;

export const Nav = styled.nav`
  position: relative;
  margin: 0 auto;
  border-radius: 50px;
  display: inline-flex;
  padding: 0 25px;
  height: 70px;
  background: ${({ theme }) => theme.colors.lightgreen};
`;

export const List = styled.ul`
  display: flex;

  &::after {
    content: "";
    background: ${({ theme }) => theme.colors.indicator};
    position: absolute;
    width: 70px;
    height: 70px;
    border-radius: 50%;
    top: -50%;
    border: 6px solid ${({ theme }) => theme.colors.blue};
    transition: 0.5s;

    transform: translateX(calc(70px * ${({ $selectedItem }) => $selectedItem}));
  }
`;

export const Text = styled.span`
  position: absolute;
  font-weight: 400;
  font-size: 12px;
  letter-spacing: 0.6px;
  transition: 0.5s;
  transform: translateY(20px);
  opacity: 0;
`;

export const Item = styled.li`
  display: flex;
  justify-content: center;
  position: relative;
  z-index: 1;

  width: 70px;
  height: 70px;
`;

export const StyledNavLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.link};

  & svg {
    display: block;
    line-height: 75px;
    text-align: center;
    transition: 0.5s;
  }

  &:hover svg,
  &:focus svg,
  &.active svg {
    transform: translateY(-35px);
  }

  &:hover span,
  &:focus span,
  &.active span {
    opacity: 1;
    transform: translateY(10px);
  }
`;

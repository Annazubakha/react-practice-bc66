import { styled } from 'styled-components';

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
`;

export const Indicator = styled.li`
  background: ${({ theme }) => theme.colors.indicator};
  position: absolute;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  top: -50%;
  border: 6px solid ${({ theme }) => theme.colors.blue};
  transition: 0.5s;
  &::before {
    content: '';
    position: absolute;
    top: 46%;
    left: -22px;
    width: 20px;
    height: 20px;
    background: transparent;
    border-top-right-radius: 20px;
    box-shadow: 0 -10px 0 0 ${({ theme }) => theme.colors.blue};
  }
  &::after {
    content: '';
    position: absolute;
    top: 46%;
    right: -22px;
    width: 20px;
    height: 20px;
    background: transparent;
    border-top-left-radius: 20px;
    box-shadow: 0 -10px 0 0 ${({ theme }) => theme.colors.blue};
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

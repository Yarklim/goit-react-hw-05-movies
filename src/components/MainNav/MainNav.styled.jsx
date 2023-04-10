import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavList = styled.ul`
  width: 100%;
  height: 100px;

  position: fixed;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 60px;

  background-image: linear-gradient(
    109.6deg,
    rgb(72, 20, 9) 11.2%,
    #ac2c39 91.1%
  );
  background-size: cover;

  z-index: 1000;
`;

export const NavItem = styled.li`
  font-size: 42px;
`;

export const ActiveNavLink = styled(NavLink)`
  color: #fff;

  &.active {
    color: #f08e0e;

    text-decoration: underline;
  }
`;

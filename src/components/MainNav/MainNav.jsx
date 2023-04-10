import { NavList, NavItem } from './MainNav.styled';
import { ActiveNavLink } from './MainNav.styled';

const MainNav = () => {
  return (
    <NavList>
      <NavItem>
        <ActiveNavLink to="/">
          Home
        </ActiveNavLink>
      </NavItem>
      <NavItem>
        <ActiveNavLink to="/movies">
          Movies
        </ActiveNavLink>
      </NavItem>
    </NavList>
  );
};

export default MainNav;

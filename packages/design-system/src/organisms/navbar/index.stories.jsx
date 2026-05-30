import Nav from 'atoms/nav';
import NavItem from 'atoms/nav-item';
import NavLink from 'atoms/nav-link';
import Navbar from 'organisms/navbar';
import { StandardHorizontalNav } from 'atoms/nav/index.stories';
import { StandardNavItem } from 'atoms/nav-item/index.stories';
import { StandardNavLink } from 'atoms/nav-link/index.stories';

export default {
  title: 'Organisms/Navbar',
  component: Navbar,
  tags: ['autodocs'],
};

export const StandardDefaultNavbar = {
  args: {
    brand: <h1>Chris Woodley</h1>,
    nav: (
      <Nav {...StandardHorizontalNav.args}>
        <NavItem {...StandardNavItem.args}>
          <NavLink {...StandardNavLink.args} />
        </NavItem>
        <NavItem {...StandardNavItem.args}>
          <NavLink {...StandardNavLink.args} />
        </NavItem>
        <NavItem {...StandardNavItem.args}>
          <NavLink {...StandardNavLink.args} />
        </NavItem>
        <NavItem {...StandardNavItem.args}>
          <NavLink {...StandardNavLink.args} />
        </NavItem>
        <NavItem {...StandardNavItem.args}>
          <NavLink {...StandardNavLink.args} />
        </NavItem>
        <NavItem {...StandardNavItem.args}>
          <NavLink {...StandardNavLink.args} />
        </NavItem>
      </Nav>
    ),
  },
};

export const StandardDefaultNavbarWithNavOnly = {
  args: {
    nav: (
      <Nav {...StandardHorizontalNav.args}>
        <NavItem {...StandardNavItem.args}>
          <NavLink {...StandardNavLink.args} />
        </NavItem>
        <NavItem {...StandardNavItem.args}>
          <NavLink {...StandardNavLink.args} />
        </NavItem>
        <NavItem {...StandardNavItem.args}>
          <NavLink {...StandardNavLink.args} />
        </NavItem>
        <NavItem {...StandardNavItem.args}>
          <NavLink {...StandardNavLink.args} />
        </NavItem>
        <NavItem {...StandardNavItem.args}>
          <NavLink {...StandardNavLink.args} />
        </NavItem>
        <NavItem {...StandardNavItem.args}>
          <NavLink {...StandardNavLink.args} />
        </NavItem>
      </Nav>
    ),
  },
};

export const StandardDefaultNavbarWithBrandOnly = {
  args: {
    brand: <h1>Brand Name</h1>,
  },
};

export const StandardDefaultNavbarWithoutNavAndBrand = {
  args: {},
};

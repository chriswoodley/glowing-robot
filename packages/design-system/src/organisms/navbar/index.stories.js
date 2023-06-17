import React from 'react';
import Nav from 'atoms/nav';
import NavItem from 'atoms/nav-item';
import NavLink from 'atoms/nav-link';
import navbarTheme from 'organisms/navbar/theme';
import Navbar from 'organisms/navbar';
import { StandardHorizontalNav } from 'atoms/nav/index.stories';
import { StandardNavItem } from 'atoms/nav-item/index.stories';
import { StandardNavLink } from 'atoms/nav-link/index.stories';

export default {
  title: 'Organisms/Navbar',
  component: Navbar,
  tags: [ 'autodocs' ],
};

export const StandardDefaultNavbar = {
  args: {
    theme: navbarTheme,
    variant: 'standard',
    brand: (<h1>Chris Woodley</h1>),
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
    )
  }
};

export const StandardDefaultNavbarWithNavOnly = {
  args: {
    theme: navbarTheme,
    variant: 'standard',
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
    )
  }
};

export const StandardDefaultNavbarWithBrandOnly = {
  args: {
    theme: navbarTheme,
    variant: 'standard',
    brand: (<h1>Brand Name</h1>),
  }
};

export const StandardDefaultNavbarWithoutNavAndBrand = {
  args: {
    theme: navbarTheme,
    variant: 'standard',
  }
};

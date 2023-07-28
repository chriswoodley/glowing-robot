import React from 'react';
import Nav from 'atoms/nav';
import NavItem from 'atoms/nav-item';
import NavLink from 'atoms/nav-link';
import navTheme from 'atoms/nav/theme';
import { StandardNavItem } from 'atoms/nav-item/index.stories';
import { StandardNavLink } from 'atoms/nav-link/index.stories';

export default {
  title: 'Atoms/Nav',
  component: Nav,
  tags: [ 'autodocs' ],
  args: {
    theme: navTheme,
    type: 'default',
    variant: 'standard',
  }
};

export const StandardDefaultNav = {
  args: {
    'aria-label': 'main navigation',
  },
  render(args) {
    return (
      <Nav {...args}>
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
    );
  }
};

export const StandardHorizontalNav = {
  args: {
    variant: 'standard',
    type: 'horizontal',
    'aria-label': 'main navigation',
    theme: navTheme
  },
  render(args) {
    return (
      <Nav {...args}>
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
    );
  }
};

export const StandardVerticalCenterNav = {
  args: {
    variant: 'standard',
    type: 'vertical center',
    'aria-label': 'main navigation',
    theme: navTheme
  },
  render(args) {
    return (
      <Nav {...args}>
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
    );
  }
};

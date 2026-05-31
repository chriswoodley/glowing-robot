import { Nav } from 'atoms/nav';
import { NavItem } from 'atoms/nav-item';
import { NavLink } from 'atoms/nav-link';
import { StandardNavItem } from 'atoms/nav-item/index.stories';
import { StandardNavLink } from 'atoms/nav-link/index.stories';

export default {
  title: 'Atoms/Nav',
  component: Nav,
  tags: ['autodocs'],
  args: {
    type: 'default',
  },
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
  },
};

export const StandardHorizontalNav = {
  args: {
    type: 'horizontal',
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
  },
};

export const StandardVerticalCenterNav = {
  args: {
    type: 'vertical center',
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
  },
};

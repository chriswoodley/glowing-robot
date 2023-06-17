import { NavItem } from 'atoms/nav-item';
import navItemTheme from 'atoms/nav-item/theme';

export default {
  title: 'Atoms/Nav Item',
  component: NavItem,
  tags: [ 'autodocs' ],
};

export const StandardNavItem = {
  args: {
    variant: 'standard',
    children: 'Nav Item',
    theme: navItemTheme
  }
};

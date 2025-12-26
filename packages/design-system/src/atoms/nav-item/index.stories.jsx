import NavItem from 'atoms/nav-item';
import navItemTheme from 'atoms/nav-item/theme';

export default {
  title: 'Atoms/Nav Item',
  component: NavItem,
  tags: [ 'autodocs' ],
  args: {
    theme: navItemTheme,
    variant: 'standard',
  }
};

export const StandardNavItem = {
  args: {
    children: 'Nav Item',
  }
};

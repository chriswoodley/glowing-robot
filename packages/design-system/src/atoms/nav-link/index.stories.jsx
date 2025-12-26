import NavLink from 'atoms/nav-link';
import navLinkTheme from 'atoms/nav-link/theme';

export default {
  title: 'Atoms/Nav Link',
  component: NavLink,
  tags: [ 'autodocs' ],
  args: {
    size: 'default',
    theme: navLinkTheme,
    variant: 'standard'
  }
};

export const StandardNavLink = {
  args: {
    children: 'Nav Link',
    href: 'https://google.com',
    target: '_blank',
    rel: 'noopener',
  }
};

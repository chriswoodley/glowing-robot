import { NavLink } from 'atoms/nav-link';
import navLinkTheme from 'atoms/nav-link/theme';

export default {
  title: 'Atoms/Nav Link',
  component: NavLink,
  tags: [ 'autodocs' ],
};

export const StandardNavLink = {
  args: {
    variant: 'standard',
    children: 'Nav Link',
    href: 'https://google.com',
    target: '_blank',
    rel: 'noopener',
    theme: navLinkTheme
  }
};

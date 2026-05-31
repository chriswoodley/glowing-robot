import { NavLink } from 'atoms/nav-link';

export default {
  title: 'Atoms/Nav Link',
  component: NavLink,
  tags: ['autodocs'],
  args: {
    size: 'default',
  },
};

export const StandardNavLink = {
  args: {
    children: 'Nav Link',
    href: 'https://google.com',
    target: '_blank',
    rel: 'noopener',
  },
};

import { NavItem } from 'atoms/nav-item';

export default {
  title: 'Atoms/Nav Item',
  component: NavItem,
  tags: ['autodocs'],
  args: {},
};

export const StandardNavItem = {
  args: {
    children: 'Nav Item',
  },
  render(args) {
    return (
      <ul>
        <NavItem {...args} />
      </ul>
    );
  },
};

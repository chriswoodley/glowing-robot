import { HamburgerButton } from 'atoms/hamburger-button';

export default {
  title: 'Atoms/Hamburger Button',
  component: HamburgerButton,
  tags: ['autodocs'],
  args: {
    'aria-label': 'Open Navigation',
    isActive: false,
  },
};

export const Default = {};

export const Active = {
  args: {
    isActive: true,
  },
};

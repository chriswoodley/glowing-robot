import merge from 'lodash/merge';
import hamburgerButton from 'atoms/hamburger-button/theme';
import nav from 'atoms/nav/theme';
import navItem from 'atoms/nav-item/theme';
import navLink from 'atoms/nav-link/theme';
import overlay from 'atoms/overlay/theme';
import contentOverlay from 'molecules/content-overlay/theme';

const designSystemTheme = {
  hamburgerButton,
  nav,
  navItem,
  navLink,
  overlay,
  contentOverlay
};

export function applyTheme(theme = {}) {
  return merge(designSystemTheme, theme);
}

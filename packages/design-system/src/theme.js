import hamburgerButton from 'atoms/hamburger-button/index.theme';
import merge from 'lodash/merge';

const designSystemTheme = {
  hamburgerButton,
};

export function applyTheme(theme = {}) {
  return merge(designSystemTheme, theme);
}

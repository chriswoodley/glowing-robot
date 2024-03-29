import 'styles/index.scss';
import rootVars from 'styles/root/_export.scss';
export { default as AspectRatioContainer } from 'atoms/aspect-ratio-container';
export { default as HamburgerButton } from 'atoms/hamburger-button';
export { default as Image } from 'atoms/image';
export { default as Nav } from 'atoms/nav';
export { default as Navbar } from 'organisms/navbar';
export { default as NavItem } from 'atoms/nav-item';
export { default as NavLink } from 'atoms/nav-link';
export { default as Icons } from 'atoms/icons';
export { default as Icon } from 'atoms/icon';
export { default as Overlay } from 'atoms/overlay';
export { default as ContentOverlay } from 'molecules/content-overlay';
export { default as Card } from 'molecules/card';
export { default as usePrevious } from 'hooks/use-previous';
export { default as useViewportMatch } from 'hooks/use-viewport-match';
export * from 'utils/device-helpers';
export * from './theme';

export const styleVariables = {
  root: {
    breakpoints: {
      sm: Number(rootVars.breakpointSmall),
      md: Number(rootVars.breakpointMedium),
      lg: Number(rootVars.breakpointLarge),
      xl: Number(rootVars.breakpointExtraLarge),
    }
  }
};

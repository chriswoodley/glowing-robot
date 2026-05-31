import 'styles/index.scss';
import rootVars from 'styles/root/_export.module.scss';
export { AspectRatioContainer } from 'atoms/aspect-ratio-container';
export { HamburgerButton } from 'atoms/hamburger-button';
export { Image } from 'atoms/image';
export { Nav } from 'atoms/nav';
export { Navbar } from 'organisms/navbar';
export { NavItem } from 'atoms/nav-item';
export { NavLink } from 'atoms/nav-link';
export { Icons } from 'atoms/icons';
export { Icon } from 'atoms/icon';
export { Overlay } from 'atoms/overlay';
export { ContentOverlay } from 'molecules/content-overlay';
export { Card } from 'molecules/card';
export { usePrevious } from 'hooks/use-previous';
export { useViewportMatch } from 'hooks/use-viewport-match';
export * from 'utils/device-helpers';

export const styleVariables = {
  root: {
    breakpoints: {
      sm: Number(rootVars.breakpointSmall),
      md: Number(rootVars.breakpointMedium),
      lg: Number(rootVars.breakpointLarge),
      xl: Number(rootVars.breakpointExtraLarge),
    },
  },
};

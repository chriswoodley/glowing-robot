import { forwardRef } from 'react';
import {
  Navbar,
} from '@cw/design-system';
import MainNav from './main-nav';
import Logo from './logo';
import { colors } from 'utils/app-theme';
import { styled } from 'styled-components';

const StyledHeader = styled.header`
  background-color: ${colors.blueYonder[800]};
  z-index: 100;
  box-shadow: 0 0 0 rgba(0,0,0,0);
  transition: box-shadow 0.2s ease, padding 0.2s ease;
  padding: 3rem 0;
  position: ${({ $isSticky }) => $isSticky ? 'sticky' : 'relative' };
  top: 0;

  ${({ $isScrolling }) => {
    if ($isScrolling) {
      return `
      box-shadow: 
        rgba(0,0,0,.5) 0px 5px 5px,
        rgba(0,0,0,.2) 0px 8px 16px;
      padding: 1.5rem 0;
      `;
    }
  }}
`;

const Header = forwardRef(function Header({
  onMobileNav,
  isMobileNavActive,
  isScrolling,
  isSticky
}, ref) {
  return (
    <StyledHeader
      $isScrolling={isScrolling}
      $isSticky={isSticky}
      ref={ref}
    >
      <Navbar
        nav={
        <MainNav
          onMobileNav={onMobileNav}
          isMobileNavActive={isMobileNavActive}
        />
      }
        brand={<Logo />}
        className="layout"
      />
    </StyledHeader>
  );
});

export default Header;

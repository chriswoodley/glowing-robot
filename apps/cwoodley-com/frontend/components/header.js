import { forwardRef } from 'react';
import {
  Navbar,
} from '@cw/design-system';
import MainNav from './main-nav';
import Logo from './logo';

const Header = forwardRef(function Header({
  onMobileNav,
  isMobileNavActive
}, ref) {
  return (
    <header className="py-4" ref={ref}>
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
    </header>
  );
});

export default Header;

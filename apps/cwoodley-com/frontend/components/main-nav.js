import React from 'react';
// import PropTypes from 'prop-types';
import {
  Nav,
  NavItem,
  HamburgerButton
} from '@cw/design-system';
import Link from 'next/link';

function MainNav() {
  return (
    <>
      <Nav
        className="display-none flex--md"
        aria-label="Main Navigation"
      >
        <NavItem>
          <Link href="/Projects" className="py-1 px-6">Projects</Link>
        </NavItem>
        <NavItem>
          <Link href="/about">About</Link>
        </NavItem>
      </Nav>

      <HamburgerButton
        className="display--md-none"
        aria-label="Open Main Navigation"
      />
    </>
  );
}

MainNav.propTypes = {};

export default MainNav;

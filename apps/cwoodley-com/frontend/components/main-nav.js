import React from 'react';
// import PropTypes from 'prop-types';
import {
  Nav,
  NavItem,
  HamburgerButton
} from '@cw/design-system';
import NavLink from './nav-link';

function MainNav() {
  return (
    <div className='flex flex--align-items-center flex--justify-contend-end'>
      <div>
        <HamburgerButton
          aria-label="Open Main Navigation"
          className="display-none--md"
        />
      </div>

      <Nav
        className="display-none flex--md my-0"
        aria-label="Main Navigation"
      >
        <NavItem>
          <NavLink href="/Projects" className="py-1 px-3">Projects</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/about" className="py-1 pl-3">About</NavLink>
        </NavItem>
      </Nav>
    </div>
  );
}

MainNav.propTypes = {};

export default MainNav;

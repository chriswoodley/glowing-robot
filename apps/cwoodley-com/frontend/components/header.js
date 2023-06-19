import React from 'react';
// import PropTypes from 'prop-types';
import {
  Navbar,
} from '@cw/design-system';
import MainNav from './main-nav';
import Logo from './logo';

function Header() {
  return (
    <header className="py-2">
      <Navbar
        nav={<MainNav />}
        brand={<Logo />}
        className="layout"
      />
    </header>
  );
}

Header.propTypes = {};

export default Header;

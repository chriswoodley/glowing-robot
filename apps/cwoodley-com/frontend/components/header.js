import React from 'react';
// import PropTypes from 'prop-types';
import {
  Navbar,
} from '@cw/design-system';
import MainNav from './main-nav';
import Logo from './logo';

function Header() {
  return (
    <header>
      <Navbar
        nav={<MainNav />}
        brand={<Logo />}
      />
    </header>
  );
}

Header.propTypes = {};

export default Header;

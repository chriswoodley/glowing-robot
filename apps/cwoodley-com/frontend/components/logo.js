import React from 'react';
import { Image } from '@cw/design-system';
import logo from 'public/logo.svg';
import NavLink from './nav-link';

function Logo() {
  return (
    <NavLink
      href="/"
      className='flex flex--align-items-center text-decoration-none'

    >
      <Image
        src={logo.src}
        alt='Chris Woodley'
        width="96"
        height="96"
        className="flex_item"
      />

      <h1 className="flex_item display-none block--md ml-3--md my-0--md">Chris Woodley</h1>
    </NavLink>
  );
}

export default Logo;

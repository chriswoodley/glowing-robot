import React, { useEffect } from 'react';
import { Image } from '@cw/design-system';
import logo from 'public/logo.svg';

function Logo() {
  return (
    <div className='flex flex--align-items-center'>
      <Image
        src={logo.src}
        alt='Chris Woodley'
        width="96"
        height="96"
        className="flex_item"
      />

      <h1 className="flex_item display-none block--md ml-3--md my-0--md">Chris Woodley</h1>
    </div>
  );
}

export default Logo;

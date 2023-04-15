import React, { useEffect } from 'react';
import logo from '../public/logo.svg';

function Logo() {
    useEffect(() => {
      return () => {
      };
    }, []);


  return (
    <div>
      <img
        src={logo}
        alt='Chris Woodley'
        width="96"
        height="96"
        />
    </div>
  );
}

export default Logo;

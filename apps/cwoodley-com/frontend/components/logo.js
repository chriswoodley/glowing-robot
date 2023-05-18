import React, { useEffect } from 'react';
import { Image } from '@cw/design-system';
import logo from 'public/logo.svg';
import styled from 'styled-components';

/**
 * TODO: do we want flex utility classes instead of doing it inline like this?
 */
const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

function Logo() {
    useEffect(() => {
      return () => {
      };
    }, []);


  return (
    <LogoContainer>
      <Image
        src={logo.src}
        alt='Chris Woodley'
        width="96"
        height="96"
      />

      Chris Woodley
    </LogoContainer>
  );
}

export default Logo;

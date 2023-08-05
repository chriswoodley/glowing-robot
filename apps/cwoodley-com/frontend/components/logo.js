'use client';

import { styled } from 'styled-components';
import { Image } from '@cw/design-system';
import logo from 'public/logo.svg';
import NavLink from './nav-link';
import { colors } from '../utils/app-theme';

const LogoText = styled.h1`
  color: ${colors.coolGrey[400]};
`;

const StyledNavLink =styled(NavLink)`
  &:hover {
    text-decoration: none;
  }
`;

function Logo() {
  return (
    <StyledNavLink
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

      <LogoText
        className="flex_item display-none block--md ml-3--md my-0--md"
      >
        Chris Woodley
      </LogoText>
    </StyledNavLink>
  );
}

export default Logo;

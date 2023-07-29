'use client';

import styled from 'styled-components';
import Link from 'next/link';

const NavLink = styled(Link)`
  font-weight: ${({ theme }) => theme.mainNavLink.standard.default.weight};

  &:link,
  &:visited {
    text-decoration: none;
    color: ${({ theme }) => theme.mainNavLink.standard.default.color};
  }

  &:hover,
  &:active {
    text-decoration: underline;
  }
`;

export default NavLink;

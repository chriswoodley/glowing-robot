import Link from 'next/link';
import styled from 'styled-components';

const NavLink = styled(Link)`
  &:link,
  &:visited {
    color: ${({ theme }) => theme.mainNavLink.standard.default.color}
  }
`;

export default NavLink;

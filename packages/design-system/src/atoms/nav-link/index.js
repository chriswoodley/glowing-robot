import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import navLinkTheme from 'atoms/nav-link/theme';
import classNames from 'classnames';

const StyledA = styled.a`
  color: ${({ theme }) => theme.default.color};
  text-decoration: ${({ theme }) => theme.default.decoration};
  
  &:hover {
    color: ${({ theme }) => theme.hover.color};
    text-decoration: ${({ theme }) => theme.hover.decoration};
  }
  
  &:active {
    color: ${({ theme }) => theme.active.color};
    text-decoration: ${({ theme }) => theme.active.decoration};
  }
  
  &:visited {
    color: ${({ theme }) => theme.visited.color};
    text-decoration: ${({ theme }) => theme.visited.decoration};
  }
`;

function NavLink({
  children,
  className,
  href,
  id,
  rel,
  size = 'default',
  target,
  theme = navLinkTheme,
  variant = 'standard'
}) {
  const variantTheme = theme[variant];
  const classes = classNames(
    'block',
    'py-1 px-10',
    { 'text-large': size === 'large' },
    className
  );

  return (
    <StyledA
      theme={variantTheme}
      size={size}
      href={href}
      rel={rel}
      target={target}
      id={id}
      className={classes}
    >
      {children}
    </StyledA>
  );
}

NavLink.propTypes = {
  variant: PropTypes.oneOf([ 'standard' ]),
  size: PropTypes.oneOf([ 'default', 'large' ]),
  theme: PropTypes.shape({
    standard: PropTypes.shape({
      default: PropTypes.shape({
        color: PropTypes.string
      })
    })
  }),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
    PropTypes.string,
  ]),
  href: PropTypes.string,
  rel: PropTypes.oneOf([
    'noreferrer',
    'noopener',
  ]),
  target: PropTypes.oneOf([
    '_self',
    '_blank',
    '_parent',
    '_top'
  ]),
  id: PropTypes.string,
  className: PropTypes.string
};

export default NavLink;

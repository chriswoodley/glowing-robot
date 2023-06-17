import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import navTheme from 'atoms/nav/theme';
import classNames from 'classnames';

const NavbarContainer = styled.div`

`;

export function Navbar({
  theme,
  variant,
  id,
  className,
  brand,
  nav
}) {
  const variantTheme = theme[variant];
  const classes = classNames(
    'flex',
    'flex--align-items-center',
    'flex--justify-content-space-between',
    className
  );

  if (brand || nav) {
    return (
      <NavbarContainer
        theme={variantTheme}
        id={id}
        className={classes}
      >
        {
          brand ? (
            <div className="flex_item">
              {brand}
            </div>
          ) : null
        }

        {
          nav ? (
            <div className='flex_item'>
              {nav}
            </div>
          ) : null
        }
      </NavbarContainer>
    );
  }

  return null;
}

Navbar.propTypes = {
  variant: PropTypes.oneOf([ 'standard' ]),
  theme: PropTypes.shape({
    standard: PropTypes.shape({
      default: PropTypes.shape({
        color: PropTypes.string
      })
    })
  }),
  brand: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
    PropTypes.string
  ]),
  nav: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
  ]),
  id: PropTypes.string,
  className: PropTypes.string
};

Navbar.defaultProps = {
  theme: navTheme,
  variant: 'standard',
};

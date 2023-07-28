import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import navTheme from 'atoms/nav/theme';
import classNames from 'classnames';

const StyledUl = styled.ul`
  list-style: none;
`;

function Nav({
  children,
  className,
  id,
  theme = navTheme,
  type = 'default',
  variant = 'standard',
  ...props
}) {
  const variantTheme = theme[variant];
  const isDefault = type === 'default';
  const isHorizontal = type === 'horizontal';
  const isVerticalCenter = type === 'vertical center';
  const classes = classNames(
    'p-0',
    'mx-0',
    {
    'block': isDefault,
    'flex': isHorizontal || isVerticalCenter,
    'flex--row': isHorizontal,
    'flex--column': isVerticalCenter,
    'flex--align-items-center': isHorizontal || isVerticalCenter,
    'flex--align-items-end': isHorizontal,
    },
    className
  );

  return (
    <StyledUl
      theme={variantTheme}
      aria-label={props['aria-label']}
      id={id}
      className={classes}
    >
      {children}
    </StyledUl>
  );
}

Nav.propTypes = {
  variant: PropTypes.oneOf([ 'standard' ]),
  type: PropTypes.oneOf([ 'default', 'horizontal', 'vertical center' ]),
  'aria-label': PropTypes.string.isRequired,
  theme: PropTypes.shape({
    standard: PropTypes.shape({
      default: PropTypes.shape({
        color: PropTypes.string
      })
    })
  }),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element
  ]),
  id: PropTypes.string,
  className: PropTypes.string
};

export default Nav;

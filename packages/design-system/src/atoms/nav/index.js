import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import navTheme from 'atoms/nav/theme';
import classNames from 'classnames';

const StyledUl = styled.ul`
  list-style: none;
`;

export function Nav({
  theme,
  variant,
  children,
  id,
  className,
  type,
  ...props
}) {
  const variantTheme = theme[variant];
  const isDefault = type === 'default';
  const isHorizontal = type === 'horizontal';
  const isVerticalCenter = type === 'vertical center';
  const classes = classNames(
    'display-none',
    'p-0',
    'mx-0',
    {
    'block--md': isDefault,
    'flex--md': isHorizontal || isVerticalCenter,
    'flex--md-row': isHorizontal,
    'flex--md-column': isVerticalCenter,
    'flex--md-align-items-center': isVerticalCenter,
    'flex--md-align-items-end': isHorizontal,
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

Nav.defaultProps = {
  theme: navTheme,
  variant: 'standard',
  type: 'default'
};

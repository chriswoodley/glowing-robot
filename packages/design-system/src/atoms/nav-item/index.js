import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import navItemTheme from 'atoms/nav-item/theme';
import classNames from 'classnames';

const StyledLi = styled.li`
  display: block;
`;

export function NavItem({
  theme,
  variant,
  children,
  id,
  className,
}) {
  const variantTheme = theme[variant];
  const classes = classNames('flex_item', className);

  return (
    <StyledLi
      theme={variantTheme}
      id={id}
      className={classes}
    >
      {children}
    </StyledLi>
  );
}

NavItem.propTypes = {
  variant: PropTypes.oneOf([ 'standard' ]),
  theme: PropTypes.shape({
    standard: PropTypes.shape({
      default: PropTypes.shape({})
    })
  }),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element
  ]),
  id: PropTypes.string,
  className: PropTypes.string
};

NavItem.defaultProps = {
  theme: navItemTheme,
  variant: 'standard',
};

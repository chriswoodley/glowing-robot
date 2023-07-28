import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import motion from 'styles/utils/motion/_export.scss';
import hamburgerButtonTheme from 'atoms/hamburger-button/theme';

const {
  transitionNormalDuration,
  transitionNormalEaseInOutBack,
  transitionFastDuration
} = motion;

const StyledLine = styled.div`
  height: 3px;
  width: 100%;
  transform-origin: center;
`;

const StyledButton = styled.button`
  border: 0;
  background-color: transparent;
  padding: 0;
  width: 64px;
  
  &:hover,
  &:active {
    background-color: transparent;
  }

  & > * {
    background: ${({ theme }) => theme.default.color };
  }

  & > :nth-child(1) {
    transition: all ${transitionNormalDuration} ${transitionNormalEaseInOutBack};
    transform: ${({ $isActive }) => $isActive
      ? 'rotate(45deg)'
      : 'rotate(0deg)'};
  }
  
  & > :nth-child(2) {
    transition: all ${transitionFastDuration} ease-in-out;
    margin-top: ${({ $isActive }) => $isActive ? '0' : '20px'};
    opacity: ${({ $isActive }) => $isActive
      ? 0
      : 1};
  }
  
  & > :nth-child(3) {
    transition: all ${transitionNormalDuration} ${transitionNormalEaseInOutBack};
    margin-top: ${({ $isActive }) => $isActive ? '-5px' : '20px'};
    transform: ${({ $isActive }) => $isActive
      ? 'rotate(-45deg)'
      : 'rotate(0deg)'};
  }
`;

function HamburgerButton({
  onClick,
  theme = hamburgerButtonTheme,
  variant = 'standard',
  className,
  isActive = false,
  ...props
}) {
  const variantTheme = theme[variant];

  const handleOnClick = useCallback((event) => {
    event.preventDefault();

    if (onClick) {
      onClick(event, !isActive);
    }
  }, [ onClick, isActive ]);


  return (
    <StyledButton
      type="button"
      onClick={handleOnClick}
      $isActive={isActive}
      theme={variantTheme}
      aria-label={props['aria-label']}
      className={className}
    >
      <StyledLine />
      <StyledLine />
      <StyledLine />
    </StyledButton>
  );
}

HamburgerButton.propTypes = {
  'aria-label': PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
  variant: PropTypes.oneOf([ 'standard' ]),
  theme: PropTypes.shape({
    standard: PropTypes.shape({
      default: PropTypes.shape({
        color: PropTypes.string
      })
    })
  })
};

export default HamburgerButton;

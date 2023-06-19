import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import motion from 'styles/utils/motion/_export.scss';
import hamburgerButtonTheme from './index.theme';

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
  background: transparent;
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
    transform: ${({ isActive }) => isActive
      ? 'rotate(45deg)'
      : 'rotate(0deg)'};
  }
  
  & > :nth-child(2) {
    transition: all ${transitionFastDuration} ease-in-out;
    margin-top: ${({ isActive }) => isActive ? '0' : '20px'};
    opacity: ${({ isActive }) => isActive
      ? 0
      : 1};
  }
  
  & > :nth-child(3) {
    transition: all ${transitionNormalDuration} ${transitionNormalEaseInOutBack};
    margin-top: ${({ isActive }) => isActive ? '-5px' : '20px'};
    transform: ${({ isActive }) => isActive
      ? 'rotate(-45deg)'
      : 'rotate(0deg)'};
  }
`;

// Ignore "React does not recognize the `isActive` prop on a DOM element" for now...
// possible styled components v5 to v6-rc regression as it wasn't happening with v5
function HamburgerButton({
  onClick,
  theme,
  variant,
  className,
  ...props
}) {
  const [ isActive, setIsActive ] = useState(false);
  const variantTheme = theme[variant];

  const handleOnClick = useCallback((event) => {
      event.preventDefault();

      setIsActive((prevIsActive) => {
        const active = !prevIsActive;

        if (onClick) {
          onClick(event, active);
        }

        return !prevIsActive;
      });
  }, [ onClick ]);

  return (
    <StyledButton
      type="button"
      onClick={handleOnClick}
      isActive={isActive}
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

HamburgerButton.defaultProps = {
  theme: hamburgerButtonTheme,
  variant: 'standard'
};

export default HamburgerButton;

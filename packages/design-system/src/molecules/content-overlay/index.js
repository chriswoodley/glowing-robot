import React, { useCallback, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { styled } from 'styled-components';
import contentOverlayTheme from 'molecules/content-overlay/theme';
import { getIsTouchDevice } from 'utils/device-helpers';

const ContentOverlayContainer = styled.div`
  position: relative;
  overflow: hidden;
  background-color: ${({ theme }) => theme.default.backgroundColor};
  cursor: ${({ $triggerType }) => $triggerType === 'click' ? 'pointer' : 'inherit'};
`;

function ContentOverlay({
  children,
  renderOverlay,
  theme = contentOverlayTheme,
  triggerType = 'click',
  variant = 'standard'
}) {
  const isTouchDevice = getIsTouchDevice();
  const variantTheme = theme[variant];
  const containerRef = useRef();
  const [ isActive, setIsActive ] = useState(false);

  const handleOnMouseOver = useCallback((event) => {
    event.stopPropagation();
    event.preventDefault();

    setIsActive(true);
  }, []);

  const handleOnMouseOut = useCallback(() => {
    setIsActive(false);
  }, []);

  const handleOnClick = useCallback((event) => {
    event.preventDefault();
    setIsActive(!isActive);
  }, [ isActive ]);

  return (
    <ContentOverlayContainer
      ref={containerRef}
      theme={variantTheme}
      onMouseEnter={triggerType === 'hover' ? handleOnMouseOver : undefined}
      onMouseLeave={triggerType === 'hover' ? handleOnMouseOut : undefined}
      onClick={triggerType === 'click' ? handleOnClick : undefined}
      $triggerType={triggerType}
      data-testid="content"
    >
      {children}

      {typeof renderOverlay === 'function' && renderOverlay({ isActive, containerRef, isTouchDevice })}
    </ContentOverlayContainer>
  );
}

ContentOverlay.propTypes = {
  triggerType: PropTypes.oneOf([ 'click', 'hover' ]),
  variant: PropTypes.oneOf([ 'standard' ]),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element
  ]),
  theme: PropTypes.shape({
    standard: PropTypes.shape({
      default: PropTypes.shape({
        backgroundColor: PropTypes.string
      })
    })
  }),
  renderOverlay: PropTypes.func.isRequired
};

export default ContentOverlay;

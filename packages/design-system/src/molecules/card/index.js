import CardContainer from 'molecules/card/styles';
import CardContext from './card-context';
import CardCover from 'atoms/card-cover';
import CardSection from 'atoms/card-section';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { useCallback, useMemo } from 'react';

function Card({
  children,
  className,
  mode = 'light',
  onClick,
  variant = 'standard',
  width,
  theme,
}) {
  const classes = classNames(
    className,
    'elevation-1',
    'border-radius',
    {
      'elevation-hover-3': !!onClick
    }
  );
  const cardContextValue = useMemo(() => {
    const isClickable = typeof onClick === 'function';

    return {
      isClickable,
      mode,
      variant
    };
  }, [ onClick, mode, variant ]);

  const handleKeyDown = useCallback((event) => {
    if (event.key === 'Enter' && typeof onClick === 'function') {
      onClick();
    }
  }, [ onClick ]);

  return (
    <CardContext.Provider value={cardContextValue}>
      <CardContainer
        theme={theme}
        className={classes}
        onClick={onClick}
        $width={width}
        $variant={variant}
        $mode={mode}
        {
          ...onClick ? {
            onKeyDown: handleKeyDown,
            role: 'link',
            tabIndex: '0'
          } : {}
        }
      >
        {children}
      </CardContainer>
    </CardContext.Provider>
  );
}

Card.propTypes = {
  theme: PropTypes.object.isRequired,
  mode: PropTypes.oneOf([ 'light', 'dark' ]),
  width: PropTypes.string,
  variant: PropTypes.oneOf([ 'default', 'error', 'warning', 'info', 'success' ]),
  onClick: PropTypes.func,
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]),
};

Card.Section = CardSection;
Card.Cover = CardCover;

export default Card;

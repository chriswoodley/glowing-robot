import React, { useCallback } from 'react';
import CardCover from 'atoms/card-cover';
import CardSection from 'atoms/card-section';
import clsx from 'clsx';
import styles from './styles.module.css';

function Card({ children, className, mode = 'light', onClick, width }) {
  const classes = clsx(
    styles.root,
    styles[mode],
    {
      [styles['is-clickable']]: onClick === 'function',
    },
    'elevation-1',
    'border-radius',
    {
      'elevation-hover-3': !!onClick,
    },
    className
  );

  const handleKeyDown = useCallback(
    (event) => {
      if (event.key === 'Enter' && typeof onClick === 'function') {
        onClick();
      }
    },
    [onClick]
  );

  return (
    <div
      className={classes}
      style={{ width }}
      {...(onClick
        ? {
            onKeyDown: handleKeyDown,
            role: 'link',
            tabIndex: '0',
            onClick,
          }
        : {})}
    >
      {children}
    </div>
  );
}

Card.Section = CardSection;
Card.Cover = CardCover;

export default Card;

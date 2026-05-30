import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

function Overlay({
  children,
  className,
  effect = 'none',
  height = '100%',
  isActive = false,
  positionY = 'top',
  type = 'screen',
  width = '100%',
}) {
  const classes = clsx(
    styles.root,
    {
      [styles.screen]: type === 'screen',
      [styles.content]: type === 'content',
      [styles['is-active']]: isActive,
      [styles['effect-slideUp']]: effect === 'slideUp',
      [styles['effect-slideDown']]: effect === 'slideDown',
      [styles['effect-slideLeft']]: effect === 'slideLeft',
      [styles['effect-slideRight']]: effect === 'slideRight',
      [styles['effect-fade']]: effect === 'fade',
      [styles['effect-none']]: effect === 'none',
      [styles['position-bottom']]: positionY === 'bottom',
    },
    'p-2',
    className
  );

  return (
    <div
      className={classes}
      style={{
        width,
        height,
      }}
      data-testid="overlay"
    >
      {children}
    </div>
  );
}

export default Overlay;

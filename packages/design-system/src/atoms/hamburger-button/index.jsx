import { useCallback } from 'react';
import styles from './styles.module.css';
import { clsx } from 'clsx';

function HamburgerButton({ onClick, className, isActive = false, ...props }) {
  const handleOnClick = useCallback(
    (event) => {
      event.preventDefault();

      if (onClick) {
        onClick(event, !isActive);
      }
    },
    [onClick, isActive]
  );

  return (
    <button
      type="button"
      onClick={handleOnClick}
      style={{
        '--hamburger-transition-duration': 'var(--transition-duration-normal)',
        '--hamburger-transition-ease':
          'var(--transition-ease-normal-in-out-back)',
        '--hamburger-transition-duration-fast':
          'var(--transition-duration-fast)',
        '--hamburger-background-color': 'var(--color-black)',
      }}
      data-active={isActive}
      aria-label={props['aria-label']}
      className={clsx(styles.button, className)}
    >
      <div className={styles.line} />
      <div className={styles.line} />
      <div className={styles.line} />
    </button>
  );
}

export { HamburgerButton };

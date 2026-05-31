import { useCallback } from 'react';
import motion from 'styles/utils/motion/_export.module.scss';
import styles from './styles.module.css';
import colors from 'styles/utils/color/_export.module.scss';
import { clsx } from 'clsx';

// TODO: Replace with design system tokens when they are available.
const {
  transitionNormalDuration,
  transitionNormalEaseInOutBack,
  transitionFastDuration,
} = motion;

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
        '--hamburger-transition-duration': transitionNormalDuration,
        '--hamburger-transition-ease': transitionNormalEaseInOutBack,
        '--hamburger-transition-duration-fast': transitionFastDuration,
        '--hamburger-background-color': colors.black,
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

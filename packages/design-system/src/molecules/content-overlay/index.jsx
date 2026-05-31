import { useCallback, useRef, useState } from 'react';
import { getIsTouchDevice } from 'utils/device-helpers';
import clsx from 'clsx';
import styles from './styles.module.css';

function ContentOverlay({
  children,
  renderOverlay,
  className,
  triggerType = 'click',
}) {
  const isTouchDevice = getIsTouchDevice();
  const containerRef = useRef();
  const [isActive, setIsActive] = useState(false);

  const handleOnMouseOver = useCallback((event) => {
    event.stopPropagation();
    event.preventDefault();

    setIsActive(true);
  }, []);

  const handleOnMouseOut = useCallback(() => {
    setIsActive(false);
  }, []);

  const handleOnClick = useCallback(
    (event) => {
      event.preventDefault();
      setIsActive(!isActive);
    },
    [isActive]
  );

  const customProps = {
    onMouseEnter: triggerType === 'hover' ? handleOnMouseOver : undefined,
    onMouseLeave: triggerType === 'hover' ? handleOnMouseOut : undefined,
    onClick: triggerType === 'click' ? handleOnClick : undefined,
    role: triggerType === 'click' ? 'button' : undefined,
  };

  return (
    <div
      ref={containerRef}
      className={clsx(styles.root, className)}
      {...customProps}
      data-testid="content"
    >
      {children}

      {typeof renderOverlay === 'function' &&
        // Passing ref object (not .current) to consumer render function
        // eslint-disable-next-line react-hooks/refs
        renderOverlay({ isActive, containerRef, isTouchDevice })}
    </div>
  );
}

export { ContentOverlay };

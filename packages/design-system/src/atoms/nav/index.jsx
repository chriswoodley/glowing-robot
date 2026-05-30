import { clsx } from 'clsx';
import styles from './styles.module.css';

function Nav({ children, className, id, type = 'default', ...props }) {
  const isDefault = type === 'default';
  const isHorizontal = type === 'horizontal';
  const isVerticalCenter = type === 'vertical center';
  const classes = clsx(
    styles.root,
    {
      block: isDefault,
      flex: isHorizontal || isVerticalCenter,
      'flex--row': isHorizontal,
      'flex--column': isVerticalCenter,
      'flex--align-items-center': isHorizontal || isVerticalCenter,
      'flex--align-items-end': isHorizontal,
    },
    className
  );

  return (
    <ul aria-label={props['aria-label']} id={id} className={classes}>
      {children}
    </ul>
  );
}

export default Nav;

import { clsx } from 'clsx';
import styles from './styles.module.css';

function CardSection({ className, children }) {
  // TODO: The `p-2` should be a design token and referenced in the styles.module.css file
  const classes = clsx(styles.root, className, 'p-2');

  return <div className={classes}>{children}</div>;
}

CardSection.displayName = 'Card.Section';

export { CardSection };

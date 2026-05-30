import clsx from 'clsx';
import styles from './styles.module.css';

function NavLink({
  children,
  className,
  href,
  id,
  rel,
  size = 'default',
  target,
}) {
  const classes = clsx(
    styles.root,
    'block',
    'py-1 px-10',
    { 'text-large': size === 'large' },
    className
  );

  return (
    <a href={href} rel={rel} target={target} id={id} className={classes}>
      {children}
    </a>
  );
}

export default NavLink;

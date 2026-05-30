import React from 'react';
import styles from './styles.module.css';
import clsx from 'clsx';

function NavItem({ children, className, id }) {
  const classes = clsx(styles.root, 'flex_item', className);

  return (
    <li id={id} className={classes}>
      {children}
    </li>
  );
}

export default NavItem;

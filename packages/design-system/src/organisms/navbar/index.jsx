import clsx from 'clsx';

function Navbar({ brand, className, id, nav }) {
  const classes = clsx(
    'flex',
    'flex--align-items-center',
    'flex--justify-content-space-between',
    className
  );

  if (brand || nav) {
    return (
      <div id={id} className={classes}>
        {brand ? <div className="flex_item">{brand}</div> : null}

        {nav ? <div className="flex_item">{nav}</div> : null}
      </div>
    );
  }

  return null;
}

export default Navbar;

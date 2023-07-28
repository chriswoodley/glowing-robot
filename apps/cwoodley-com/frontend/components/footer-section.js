import classNames from "classnames";

// children can be linked icons or a list of links
function FooterSection({
  title,
  children,
  className,
  id
}) {
  const classes = classNames('flex_item', className);

  return (
    <section
      id={id}
      className={classes}
    >
      {
        title ? (
          <h5>{title}</h5>
        ) : null
      }

      <div className="flex">
        {children}
      </div>
    </section>
  );
}

export default FooterSection;

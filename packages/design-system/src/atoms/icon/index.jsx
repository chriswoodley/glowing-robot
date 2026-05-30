import { clsx } from 'clsx';
import styles from './styles.module.css';

function Icon({ glyph, title, size = 48, color, backgroundColor, className }) {
  if (glyph && title) {
    const classes = clsx(styles.icon, className);

    return (
      <svg
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        className={classes}
        // TODO: replace with design token variables
        style={{
          '--icon-color': color,
          '--icon-size': `${size}px`,
          '--icon-background-color': backgroundColor,
        }}
      >
        <title>{title}</title>
        <use xlinkHref={`#${glyph}`}></use>
      </svg>
    );
  }

  return null;
}

export default Icon;

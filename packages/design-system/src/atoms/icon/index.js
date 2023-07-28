import React from 'react';
import PropTypes from 'prop-types';
import classNames from "classnames";

function Icon({
  glyph,
  title,
  size = 48,
  color,
  backgroundColor,
  className
}) {
  const classes = classNames('icon', className);

  if (glyph && title) {
    return (
      <svg
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        className={classes}
        style={{ fill: color, width: size, height: size, backgroundColor }}
      >
        <title>{title}</title>
        <use xlinkHref={`#${glyph}`}></use>
      </svg>
    );
  }

  return null;
}

Icon.propTypes = {
  glyph: PropTypes.oneOf([
    'css',
    'email',
    'external-link',
    'github',
    'html',
    'javascript',
    'linkedin',
    'pdf',
    'react',
    'word',
  ]).isRequired,
  title: PropTypes.string.isRequired,
  color: PropTypes.string,
  backgroundColor: PropTypes.string,
  size: PropTypes.oneOfType([ PropTypes.string, PropTypes.number ]),
  className: PropTypes.string,
};

export default Icon;

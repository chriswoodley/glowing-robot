import React from 'react';
import PropTypes from 'prop-types';
import Icons from 'icons';


function Icon({ glyph, title, size, color, backgroundColor }) {
  const id = Icons[glyph]?.id;

  if (id) {
    return (
      <svg role="img" style={{ fill: color, width: size, height: size, backgroundColor }}>
        <title>{title}</title>
        <use xlinkHref={`#${id}`}></use>
      </svg>
    );
  }

  return null;
}

Icon.defaultProps = {
  size: 48
};

Icon.propTypes = {
  glyph: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  color: PropTypes.string,
  backgroundColor: PropTypes.string,
  size: PropTypes.oneOfType([ PropTypes.string, PropTypes.number ])
};

export default Icon;

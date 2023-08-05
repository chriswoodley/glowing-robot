import React from 'react';
import PropTypes from 'prop-types';
import classNames from "classnames";
import styled from 'styled-components';

const StyledSvg = styled.svg`
  fill: ${({ $color }) => $color};
  width: ${({ $size }) => $size}px;
  height: ${({ $size }) => $size}px;
  background-color: ${({ $backgroundColor }) => $backgroundColor};
`;

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
      <StyledSvg
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        className={classes}
        $color={color}
        $size={size}
        $backgroundColor={backgroundColor}
      >
        <title>{title}</title>
        <use xlinkHref={`#${glyph}`}></use>
      </StyledSvg>
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

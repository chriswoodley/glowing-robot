import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { createResource } from 'utils/suspense';

/**
 * Notes:
 * images should be optimized for width/height and quality and makes the assumption the developer
 * has already done that
 *
 * lqip-modern: package that will create a base64 datauri blurred image placeholder. will also
 * calculate the intrinsic width/height of the image
 *
 * width and height should be applied when not using Object Fit: cover
 * on the other hand, sizes and srcset should be supplied when using object fit cover
 * experiment with base64 srcset
 *
 * need to find a library that will create images at different sizes? sharp? jimp? does it work
 * in webpack builds without a loader?
 *
 * Instead of making the assumption the user should use suspense. lets include it for them so
 * that we can display the lqip automatically
 * *
 * Don't assume the user wants the image to fill (Object fit cover)
 *
 * Responsive Images
 * when the user provides a sizes prop
 * this will create a srcset based on preset device widths or breakpoints
 *
 * This component makes the assumption the user has already optimized the image either manually,
 * or remotely using a 3rd party service like cloudinary
 */

const StyledImage = styled.img`
  ${({ fill }) => {
    if (fill) {
      return `
        height: 100%;
        width: 100%;
        object-fit: cover;
        position: absolute;
      `;
    }
  }} 
`;

const cache = new Map();

function loadImage(source) {
  let resource = cache.get(source);

  if (resource) return resource;

  resource = createResource(
    () =>
      new Promise((resolve, reject) => {
        const img = new window.Image();
        img.src = source;
        img.onload = () => resolve(source);
        img.onerror = () => reject(new Error(`Failed to load image ${source}`));
      })
  );

  cache.set(source, resource);

  return resource;
}

export default function Image({ src, alt, fill, sizes }) {
  loadImage(src).read();

  return (
    <StyledImage src={src} alt={alt} decoding="async" loading="lazy" />
  );
}

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  fill: PropTypes.bool,
  sizes: PropTypes.string
};

Image.defaultProps = {
  fill: false,
};

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { createResource } from 'utils/suspense';

const StyledImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
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

export default function LazyCoverImage({ src, alt }) {
  loadImage(src).read();

  return (
    <StyledImage src={src} alt={alt} />
  );
}

LazyCoverImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
};

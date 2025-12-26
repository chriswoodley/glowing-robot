import React from "react";
import styled from "styled-components";

const StyledImage = styled.img`
  ${({ $fill, $placeholder }) => {
    if ($fill) {
      return `
        height: 100%;
        width: 100%;
        object-fit: cover;
        object-position: top;
        position: absolute;
        background-size: cover;
        background-image: url(${$placeholder});
      `;
    } else {
      return `
        background-size: cover;
        background-image: url(${$placeholder});
      `;
    }
  }}
`;

/**
 * Converts a string in both client and server side to Base64 string
 * @param {string} data the string you want to convert to Base64
 * @returns a Base64 string
 */
const convertToBase64 = (data) => {
  if (typeof window !== "undefined") {
    return window.btoa(data);
  }

  return Buffer.from(data, "utf-8").toString("base64");
};

const colorPlaceholderImageCache = new Map();
const generateColorPlaceholder = ({ width, height, color }) => {
  const key = `${width},${width},${color}`;

  if (!colorPlaceholderImageCache.has(key)) {
    colorPlaceholderImageCache.set(
      key,
      `data:image/svg+xml;base64,${convertToBase64(
        `<svg viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
        <rect width="${width}" height="${height}" fill="${color}"></rect>
      </svg>`
      )}`
    );
  }

  return colorPlaceholderImageCache.get(key);
};

function Image({
  alt,
  className,
  crossOrigin,
  decoding = "async",
  fill = false,
  height,
  loading = "lazy",
  placeholder = {},
  sizes,
  src,
  srcSet,
  width,
}) {
  let fallback = generateColorPlaceholder({ width, height, color: "#eeeeee" });

  Object.keys(placeholder).forEach((key) => {
    const data = placeholder[key];

    if (data) {
      if (key === "color") {
        fallback = generateColorPlaceholder({ width, height, color: data });
      }

      if (["dataURL", "URL"].includes(key)) {
        fallback = data;
      }
    }
  });

  return (
    <StyledImage
      alt={alt}
      crossOrigin={crossOrigin}
      decoding={decoding}
      height={height}
      loading={loading}
      sizes={sizes}
      src={src}
      srcSet={srcSet}
      width={width}
      className={className}
      $placeholder={fallback}
      $fill={fill}
    />
  );
}

export default Image;

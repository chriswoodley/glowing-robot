import React from "react";
import { styled } from "styled-components";
import classnames from "classnames";
import overlayTheme from "atoms/overlay/theme";

const OverlayContainer = styled.div`
  display: ${({ $effect, $isActive }) => {
    switch ($effect) {
      case "slideUp":
      case "slideDown":
      case "slideLeft":
      case "slideRight":
      case "fade":
        return "block";

      default:
        return $isActive ? "block" : "none";
    }
  }};
  width: ${({ $width }) => $width};
  height: ${({ $height }) => $height};
  position: ${({ $type }) => ($type === "screen" ? "fixed" : "absolute")};
  z-index: ${({ $type }) => ($type === "screen" ? 100 : 10)};

  ${({ $effect, $isActive, $type, $positionY }) => {
    if ($type === "screen" && $isActive && $effect === "none") {
      return `
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
      `;
    }

    if ($type === "screen" && $effect === "slideUp") {
      return `
        top: ${$isActive ? "0%" : "100%"};
        bottom: ${$isActive ? "0%" : "-100%"};
        left: 0;
        right: 0;
        transition: bottom 0.3s ease, top 0.3s ease;
      `;
    }

    if ($type === "content" && $effect === "slideUp") {
      return `
        bottom: ${$isActive ? "0%" : "-100%"};
        transition: bottom 0.3s ease, top 0.3s ease;
      `;
    }

    if ($type === "content" && $effect === "none" && $isActive && $positionY) {
      const isBottom = $positionY === "bottom";

      if (isBottom) {
        return `
          bottom: 0;
          left: 0;
        `;
      }

      return `
        top: 0;
        left: 0;
      `;
    }
  }}

  background-color: ${({ theme }) => theme.default.backgroundColor};
`;

function Overlay({
  children,
  className,
  effect = "none",
  height = "100%",
  isActive = false,
  positionY = "top",
  theme = overlayTheme,
  type = "screen",
  variant = "standard",
  width = "100%",
}) {
  const variantTheme = theme[variant];
  const classes = classnames("p-2", className);

  return (
    <OverlayContainer
      className={classes}
      theme={variantTheme}
      $type={type}
      $width={width}
      $height={height}
      $isActive={isActive}
      $effect={effect}
      $positionY={positionY}
      data-testid="overlay"
    >
      {children}
    </OverlayContainer>
  );
}

export default Overlay;

import React from "react";
import styled from "styled-components";
import navTheme from "atoms/nav/theme";
import classNames from "classnames";

const StyledUl = styled.ul`
  list-style: none;
`;

function Nav({
  children,
  className,
  id,
  theme = navTheme,
  type = "default",
  variant = "standard",
  ...props
}) {
  const variantTheme = theme[variant];
  const isDefault = type === "default";
  const isHorizontal = type === "horizontal";
  const isVerticalCenter = type === "vertical center";
  const classes = classNames(
    "p-0",
    "mx-0",
    {
      block: isDefault,
      flex: isHorizontal || isVerticalCenter,
      "flex--row": isHorizontal,
      "flex--column": isVerticalCenter,
      "flex--align-items-center": isHorizontal || isVerticalCenter,
      "flex--align-items-end": isHorizontal,
    },
    className
  );

  return (
    <StyledUl
      theme={variantTheme}
      aria-label={props["aria-label"]}
      id={id}
      className={classes}
    >
      {children}
    </StyledUl>
  );
}

export default Nav;

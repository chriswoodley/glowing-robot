import React from "react";
import styled from "styled-components";
import navLinkTheme from "atoms/nav-link/theme";
import classNames from "classnames";

const StyledA = styled.a`
  color: ${({ theme }) => theme.default.color};
  text-decoration: ${({ theme }) => theme.default.decoration};

  &:hover {
    color: ${({ theme }) => theme.hover.color};
    text-decoration: ${({ theme }) => theme.hover.decoration};
  }

  &:active {
    color: ${({ theme }) => theme.active.color};
    text-decoration: ${({ theme }) => theme.active.decoration};
  }

  &:visited {
    color: ${({ theme }) => theme.visited.color};
    text-decoration: ${({ theme }) => theme.visited.decoration};
  }
`;

function NavLink({
  children,
  className,
  href,
  id,
  rel,
  size = "default",
  target,
  theme = navLinkTheme,
  variant = "standard",
}) {
  const variantTheme = theme[variant];
  const classes = classNames(
    "block",
    "py-1 px-10",
    { "text-large": size === "large" },
    className
  );

  return (
    <StyledA
      theme={variantTheme}
      size={size}
      href={href}
      rel={rel}
      target={target}
      id={id}
      className={classes}
    >
      {children}
    </StyledA>
  );
}

export default NavLink;

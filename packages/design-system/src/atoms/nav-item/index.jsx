import React from "react";
import styled from "styled-components";
import navItemTheme from "atoms/nav-item/theme";
import classNames from "classnames";

const StyledLi = styled.li`
  display: block;
`;

function NavItem({
  children,
  className,
  id,
  theme = navItemTheme,
  variant = "standard",
}) {
  const variantTheme = theme[variant];
  const classes = classNames("flex_item", className);

  return (
    <StyledLi theme={variantTheme} id={id} className={classes}>
      {children}
    </StyledLi>
  );
}

export default NavItem;

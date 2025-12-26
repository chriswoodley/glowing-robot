import React from "react";
import styled from "styled-components";
import navTheme from "atoms/nav/theme";
import classNames from "classnames";

const NavbarContainer = styled.div``;

function Navbar({
  brand,
  className,
  id,
  nav,
  theme = navTheme,
  variant = "standard",
}) {
  const variantTheme = theme[variant];
  const classes = classNames(
    "flex",
    "flex--align-items-center",
    "flex--justify-content-space-between",
    className
  );

  if (brand || nav) {
    return (
      <NavbarContainer theme={variantTheme} id={id} className={classes}>
        {brand ? <div className="flex_item">{brand}</div> : null}

        {nav ? <div className="flex_item">{nav}</div> : null}
      </NavbarContainer>
    );
  }

  return null;
}

export default Navbar;

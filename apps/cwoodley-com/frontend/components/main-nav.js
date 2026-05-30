import { Nav, NavItem, HamburgerButton } from "@cw/design-system";
import NavLink from "./nav-link";
import styled from "styled-components";

const StyledMainNav = styled.footer`
  .icon div {
    background-color: ${({ theme }) =>
      theme.hamburgerButton.standard.default.color};
  }
`;

function MainNav({ onMobileNav, isMobileNavActive }) {
  return (
    <StyledMainNav className="flex flex--align-items-center flex--justify-contend-end">
      <div style={{ height: 49.34 }}>
        <HamburgerButton
          aria-label="Open Main Navigation"
          className="display-none--md icon"
          onClick={onMobileNav}
          isActive={isMobileNavActive}
        />
      </div>

      <Nav className="display-none flex--md my-0" aria-label="Main Navigation">
        <NavItem>
          <NavLink href="/projects" className="py-1 px-3 text-large">
            Projects
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/blog" className="py-1 px-3 text-large">
            Blog
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/about" className="py-1 pl-3 text-large">
            About
          </NavLink>
        </NavItem>
      </Nav>
    </StyledMainNav>
  );
}

export default MainNav;

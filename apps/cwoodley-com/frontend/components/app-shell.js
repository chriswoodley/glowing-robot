'use client';

import { useCallback, useRef, useState, useEffect } from "react";
import { styled } from "styled-components";
import { usePathname } from 'next/navigation';
import Footer from "./footer";
import Header from "./header";
import {
  Nav,
  NavItem,
  usePrevious,
} from '@cw/design-system';
import NavLink from './nav-link';

const MainNavOverlay = styled.div`
  position: fixed;
  top: ${({ $offset, $isActive }) => $isActive ? `${$offset}px` : 'auto'};
  right: 0;
  bottom: ${({ $isActive }) => $isActive ? 0 : '100%'};
  left: 0;
  background-color: ${({ theme }) => theme.mainNavOverlay.standard.default.backgroundColor};
  z-index: 99;
  opacity: ${({ $isActive }) => $isActive ? 1 : 0};
  transition: bottom 0.2s ease;
  overflow: hidden;
`;

function AppShell({ children }) {
  const path = usePathname();
  const prevPath = usePrevious(path);
  const [ isMobileNavActive, setIsMobileNavActive ] = useState(false);
  const [ overlayTopOffset, setOverlayTopOffset ] = useState(0);
  const headerRef = useRef();

  useEffect(() => {
    if (path !== prevPath) {
      setIsMobileNavActive(false);
    }
  }, [ prevPath, path ]);

  useEffect(() => {
      const offset = headerRef.current.getBoundingClientRect().height;
      setOverlayTopOffset(offset);
  }, [ isMobileNavActive ]);

  const handleMobileNav = useCallback((event, isActive) => {
    setIsMobileNavActive(isActive);
  }, []);

  return (
    <>
      <MainNavOverlay
        $isActive={isMobileNavActive}
        $offset={overlayTopOffset}
        className="display-none--md"
      >
        <div
          className="layout flex flex--column"
          style={{ height: '100%' }}
        >
          <Nav
            aria-label="Main Navigation"
            type="vertical center"
            className="mt-4"
          >
            <NavItem>
              <NavLink
                href="/projects"
                className="text-large block"
              >
                Projects
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink
                href="/about"
                className="text-large block"
              >
                About
              </NavLink>
            </NavItem>
          </Nav>
        </div>
      </MainNavOverlay>

      <Header
        ref={headerRef}
        onMobileNav={handleMobileNav}
        isMobileNavActive={isMobileNavActive}
      />

      <main>
        <div className="layout">
          {children}
        </div>
      </main>

      <Footer />
    </>
  );
}

export default AppShell;
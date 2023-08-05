'use client';

import { styled } from 'styled-components';
import FooterSection from 'components/footer-section';
import ObfuscateMailto from 'components/obfuscate-mailto';
import { Icon } from '@cw/design-system';

const StyledFooter = styled.footer`
  background-color: ${({ theme }) => theme.footer.standard.default.backgroundColor};
  
  h5 {
    color: ${({ theme }) => theme.footer.standard.default.color};
  }
  
  .icon {
    fill: ${({ theme }) => theme.footer.standard.default.backgroundColor};
    background-color: ${({ theme }) => theme.footer.standard.default.color};
  }
`;

function Footer() {
  return (
    <StyledFooter className="pt-2 pb-4">
      <div className="flex flex--justify-content-space-between layout">
        <div className="flex_item flex_item--auto flex flex--wrap">
          <FooterSection
            title="Get In Touch"
          >
            <ObfuscateMailto
              email="chriswoodley@me.com"
            >
              <Icon
                glyph="email"
                title="Contact me by email"
              />
            </ObfuscateMailto>

            <a href="https://www.linkedin.com/pub/chris-woodley/29/630/654" target="_blank">
              <Icon
                glyph="linkedin"
                title="Learn more about me on LinkedIn"
                className="ml-2"
              />
            </a>
          </FooterSection>

          <FooterSection
            title="Resumé"
            className="ml-6"
          >
            <a href="/resume/chris-wooodley.pdf" download>
              <Icon
                glyph="pdf"
                title="Download my Resumé as a PDF Document"
              />
            </a>
            <a href="/resume/chris-wooodley.docx" download>
              <Icon
                glyph="word"
                title="Download my Resumé as a Word Document"
                className="ml-2"
              />
            </a>
          </FooterSection>

          <FooterSection
            title="Code"
            className="display-none block--sm ml-6--sm"
          >
            <a href="https://github.com/chriswoodley" target="_blank">
              <Icon
                glyph="github"
                title="See what I have been working on"
              />
            </a>
          </FooterSection>
        </div>

        <div className="display-none flex--md flex_item--md flex--md-align-items-end">
          <FooterSection>
            <Icon
              glyph="react"
              title="Powered by React"
            />
            <Icon
              glyph="javascript"
              title="Powered by Javascript"
              className="ml-2"
            />
            <Icon
              glyph="html"
              title="Powered by HTML5"
              className="ml-2"
            />
            <Icon
              glyph="css"
              title="Powered by HTML CS 3"
              className="ml-2"
            />
          </FooterSection>
        </div>
      </div>

      <div className="layout mt-4 display-none--sm">
        <FooterSection
          title="Code"
        >
          <a href="https://github.com/chriswoodley" target="_blank">
            <Icon
              glyph="github"
              title="See what I have been working on"
            />
          </a>
        </FooterSection>
      </div>
    </StyledFooter>
  );
}

export default Footer;

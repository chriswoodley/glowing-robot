'use client';

import React from 'react';
import styled from 'styled-components';
import { ContentOverlay, Overlay, Image, AspectRatioContainer } from '@cw/design-system';
import Link from 'next/link';

const Grid = styled.div`
  display: grid;
  gap: 1.5rem;
  margin-bottom: 3rem;

  @media (min-width: 816px) { // TODO: export breakpoint variables from design system and use that
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1008px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

function ProjectsPage() {
  return (
    <Grid>
      <Link href="/projects/losant">
        <ContentOverlay
          triggerType="hover"
          renderOverlay={({ isActive, isTouchDevice }) => {
            return (
              <Overlay
                key="losant"
                isActive={isTouchDevice || isActive}
                type="content"
                height="auto"
                effect="slideUp"
              >
                <h4 className="mb-0">Losant IoT Platform</h4>
                <p className="mt-0 mb-0">app.losant.com</p>
              </Overlay>
            );
          }}
        >
          <AspectRatioContainer
            size="xlg"
            ratio="1/1"
          >
            <Image
              src="projects/losant-com-workflow-1280.png"
              alt="Losant"
              width="1280"
              height="836"
              fill
            />
          </AspectRatioContainer>
        </ContentOverlay>
      </Link>

      <Link href="/projects/genetesis">
        <ContentOverlay
          triggerType="hover"
          renderOverlay={({ isActive, isTouchDevice }) => {
            return (
              <Overlay
                isActive={isTouchDevice || isActive}
                type="content"
                height="auto"
                effect="slideUp"
              >
                <h4 className="mb-0">CardioFlux</h4>
                <p className="mb-0 mt-0">cardioflux.genetesis.com</p>
              </Overlay>
            );
          }}
        >
          <AspectRatioContainer
            size="xlg"
            ratio="1/1"
          >
            <Image
              src="projects/genetesis-com.png"
              alt="Genetesis"
              width="1761"
              height="1307"
              fill
            />
          </AspectRatioContainer>
        </ContentOverlay>
      </Link>

      <Link href="/projects/my-bp-station">
        <ContentOverlay
          triggerType="hover"
          renderOverlay={({ isActive, isTouchDevice }) => {
            return (
              <Overlay
                isActive={isTouchDevice || isActive}
                type="content"
                height="auto"
                effect="slideUp"
              >
                <h4 className="mb-0">My BP Station</h4>
                <p className="mb-0 mt-0">mybpstation.com</p>
              </Overlay>
            );
          }}
        >
          <AspectRatioContainer
            size="xlg"
            ratio="1/1"
          >
            <Image
              src="projects/mybpstation-com.jpg"
              alt="My BP Station"
              width="1263"
              height="929"
              fill
            />
          </AspectRatioContainer>
        </ContentOverlay>
      </Link>

      <Link href="/projects/tea-leaves-health">
        <ContentOverlay
          triggerType="hover"
          renderOverlay={({ isActive, isTouchDevice }) => {
            return (
              <Overlay
              isActive={isTouchDevice || isActive}
              type="content"
              height="auto"
              effect="slideUp"
              >
                <h4 className="mb-0">Tea Leaves Health</h4>
                <p className="mb-0 mt-0">tealeaveshealth.com</p>
              </Overlay>
            );
          }}
          >
          <AspectRatioContainer
            size="xlg"
            ratio="1/1"
            >
            <Image
              src="projects/tealeaveshealth-com.jpg"
              alt="Tea Leaves Health"
              width="1263"
              height="929"
              fill
            />
          </AspectRatioContainer>
        </ContentOverlay>
      </Link>

      <Link href="/projects/fopconnect">
        <ContentOverlay
          triggerType="hover"
          renderOverlay={({ isActive, isTouchDevice }) => {
            return (
              <Overlay
                isActive={isTouchDevice || isActive}
                type="content"
                height="auto"
                effect="slideUp"
              >
                <h4 className="mb-0">FOP Connect</h4>
                <p className="mb-0 mt-0">fopconnect.com</p>
              </Overlay>
            );
          }}
        >
          <AspectRatioContainer
            size="xlg"
            ratio="1/1"
          >
            <Image
              src="projects/fopconnect-com.png"
              alt="FOP Connect"
              width="1263"
              height="929"
              fill
            />
          </AspectRatioContainer>
        </ContentOverlay>
      </Link>

      <Link href="/projects/straussner-and-sherman">
        <ContentOverlay
          triggerType="hover"
          renderOverlay={({ isActive, isTouchDevice }) => {
            return (
              <Overlay
                isActive={isTouchDevice || isActive}
                type="content"
                height="auto"
                effect="slideUp"
              >
                <h4 className="mb-0">Straussner & Sherman</h4>
                <p className="mb-0 mt-0">iodlawyers.com</p>
              </Overlay>
            );
          }}
        >
          <AspectRatioContainer
            size="xlg"
            ratio="1/1"
          >
            <Image
              src="projects/iodlawyers-com.png"
              alt="Straussner & Sherman"
              width="1263"
              height="929"
              fill
            />
          </AspectRatioContainer>
        </ContentOverlay>
      </Link>

      <Link href="/projects/azplea">
        <ContentOverlay
          triggerType="hover"
          renderOverlay={({ isActive, isTouchDevice }) => {
            return (
              <Overlay
                isActive={isTouchDevice || isActive}
                type="content"
                height="auto"
                effect="slideUp"
              >
                <h4 className="mb-0">Phoenix Law Enforcement Association</h4>
                <p className="mb-0 mt-0">azplea.com</p>
              </Overlay>
            );
          }}
        >
          <AspectRatioContainer
            size="xlg"
            ratio="1/1"
          >
            <Image
              src="projects/azplea-com.png"
              alt="Phoenix Law Enforcement Association"
              width="1263"
              height="929"
              fill
            />
          </AspectRatioContainer>
        </ContentOverlay>
      </Link>

      <Link href="/projects/el-cajon-poa">
        <ContentOverlay
          triggerType="hover"
          renderOverlay={({ isActive, isTouchDevice }) => {
            return (
              <Overlay
                isActive={isTouchDevice || isActive}
                type="content"
                height="auto"
                effect="slideUp"
              >
                <h4 className="mb-0">El Cajon Police Officers&apos; Association</h4>
                <p className="mb-0 mt-0">elcajonpoa.org</p>
              </Overlay>
            );
          }}
        >
          <AspectRatioContainer
            size="xlg"
            ratio="1/1"
          >
            <Image
              src="projects/elcajonpoa-org.png"
              alt="El Cajon Police Officers' Association"
              width="1263"
              height="929"
              fill
            />
          </AspectRatioContainer>
        </ContentOverlay>
      </Link>

      <Link href="/projects/silverland-inn">
        <ContentOverlay
          triggerType="hover"
          renderOverlay={({ isActive, isTouchDevice }) => {
            return (
              <Overlay
                isActive={isTouchDevice || isActive}
                type="content"
                height="auto"
                effect="slideUp"
              >
                <h4 className="mb-0">Silverland Inn & Suites</h4>
                <p className="mb-0 mt-0">silverlandusa.com</p>
              </Overlay>
            );
          }}
        >
          <AspectRatioContainer
            size="xlg"
            ratio="1/1"
          >
            <Image
              src="projects/silverlandusa-com.png"
              alt="Silverland Inn & Suites"
              width="1263"
              height="929"
              fill
            />
          </AspectRatioContainer>
        </ContentOverlay>
      </Link>
    </Grid>
  );
}

export default ProjectsPage;

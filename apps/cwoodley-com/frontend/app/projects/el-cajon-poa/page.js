'use client';

import React from 'react';
import { Image, AspectRatioContainer } from '@cw/design-system';

function ElCajonPoaPage() {
  return (
    <div>
      <AspectRatioContainer
        size="xlg"
        ratio="2/1"
      >
        <Image
          src="../projects/elcajonpoa-org.png"
          alt="El Cajon Police Officers' Association"
          width="1263"
          height="929"
          fill
        />
      </AspectRatioContainer>

      <p>
        El Cajon Police Association website represents the men and women of the El Cajon{' '}
        Police Department who protect and serve the community every day.
      </p>

      <p>
        The goals of the website are:
      </p>

      <ul>
        <li>
          Inform visitors of the various donation, sponsorship, and charitable opportunities{' '}
          they can get involved with to help protect the pay, benefits, and working conditions{' '}
          of the El Cajon Police Offers’.
        </li>
        <li>
          Provide up to date News and Upcoming Events
        </li>
        <li>
          Honor the fallen heroes
        </li>
        <li>
          Provide an easy way to connect and communicate with the association through it&apos;s{' '}
          Board of Directors
        </li>
      </ul>

      <h2>
        Front-End Developer Role
      </h2>

      <ul>
        <li>
          Front-end WordPress theme development incorporating HTML5, CSS3, jQuery, PHP, and{' '}
          responsive layout.
        </li>
        <li>
          Developed a feed plugin to display feed items from odmp.org.
        </li>
        <li>
          Responsible for build out and visual layout of the content.
        </li>
        <li>
          Performed periodic website updates.
        </li>
      </ul>

      <h2>
        Challenges
      </h2>

      <ul>
        <li>
          Cross device compatibility. Utilized the proven CSS Bootstrap Framework.
        </li>
        <li>
          Browser Testing. Performed browser testing using Browser Stack. Used polyfills for{' '}
          less capable browsers.
        </li>
      </ul>

      <h2>
        What I Have Learned
      </h2>

      <p>
        I have discovered the respond.js and selectivizr.js polyfill. These polyfills made{' '}
        media queries and CSS3 selector support possible in less capable browsers such as IE8.
      </p>
  </div>
  );
}

export default ElCajonPoaPage;

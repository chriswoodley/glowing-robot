'use client';

import React from 'react';
import { Image, AspectRatioContainer } from '@cw/design-system';

function AzpleaPage() {
  return (
    <div>
      <AspectRatioContainer
        size="xlg"
        ratio="2/1"
      >
        <Image
          src="../projects/azplea-com.png"
          alt="Phoenix Law Enforcement Association"
          width="1263"
          height="929"
          fill
        />
      </AspectRatioContainer>

      <p>
        The Phoenix Law Enforcement Association website aims to promote the positive role of{' '}
        the police profession by protecting and securing members’ rights.
      </p>

      <p>
        The goals of this website were to:
      </p>

      <ul>
        <li>
          Provide information regarding the capabilities of the association to the public.
        </li>
        <li>
          Act as a conduit for charities and donations
        </li>
        <li>
          Honor the fallen heroes
        </li>
        <li>
          Syndicate latest news regarding legislative initiatives and contract negotiations
        </li>
        <li>
          Offer members training &amp; classes, tickets &amp; discounts, and other pertinent{' '}
          information that is only available to them.
        </li>
      </ul>

      <h2>
        Front-End Developer Role
      </h2>

      <ul>
        <li>
          Front-end WordPress child theme development incorporating HTML5, CSS3, jQuery, and PHP.
        </li>
        <li>
          Integrate various plugins for the members only area, setup Custom Post Types and{' '}
          Custom Post Type templates for various sections of the site.
        </li>
        <li>
          Expedited the transfer of content and member data from Joomla CMS to WordPress.
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
          Provide an affordable website package by selecting a pre-built theme. Research was{' '}
          performed during the selection process. During the build-out, the themes developer{' '}
          documentation was crucial in making the necessary modifications needed to produce{' '}
          azplea.com’s branding and functionality.
        </li>
      </ul>

      <h2>
        What I Have Learned
      </h2>

      <ul>
        <li>
          There are always options/variations to provide clients based on their budget.
        </li>
      </ul>
  </div>
  );
}

export default AzpleaPage;

'use client';

import React from 'react';
import { Image, AspectRatioContainer } from '@cw/design-system';

function StraussnerAndShermanPage() {
  return (
    <div>
      <AspectRatioContainer
        size="xlg"
        ratio="2/1"
      >
        <Image
          src="../projects/iodlawyers-com.png"
          alt="Straussner & Sherman"
          width="1263"
          height="929"
          fill
        />
      </AspectRatioContainer>

      <p>
        Straussner Sherman website boasts capabilities of the Law Firm in providing legal{' '}
        services to safety members and their families.
      </p>

      <p>
        The website primary goals were to:
      </p>

      <ul>
        <li>
          Establish an online presence for generating new business.
        </li>
        <li>
          Offer information about the capabilities of the firm.
        </li>
        <li>
          Provide legal resources and informative articles regarding Workers&apos; Compensation.
        </li>
      </ul>

      <h2>
        Front-End Developer Role
      </h2>

      <ul>
        <li>
          Front-end WordPress theme development incorporating HTML5, CSS3, jQuery, PHP, and{' '}
          fluid responsive layout.
        </li>
        <li>
          Use tools like Sass and CodeKit to organize and compile minified CSS code.
        </li>
        <li>
          Browser test front-end code with Firefox, Chrome, and Internet Explorer 8 and above.
        </li>
        <li>
          Responsible for the build out and visual layout of the content.
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
          Using proper CSS fallbacks for non-supported CSS3 properties. Relied heavily on{' '}
          caniuse.com for a list of supported browser features.
        </li>
        <li>
          Testing front-end code in all browsers. Browserstack.com was the tool that was used to{' '}
          test the website in various operating systems and web browser combinations.
        </li>
      </ul>

      <h2>
        What I Have Learned
      </h2>

      <ul>
        <li>
          The math behind crafting responsive CSS code{' '}
          (target width / context width = relative width).
        </li>
        <li>
          Using polyfills to add support for non-supported CSS3 properties, such as html5shiv,{' '}
          selectivizr, respond.js to make ie8 understand media queries.
        </li>
      </ul>
  </div>
  );
}

export default StraussnerAndShermanPage;

'use client';

import React from 'react';
import { Image } from '@cw/design-system';

function AboutPage() {
  return (
    <div
      className="layout_row layout_row--md"
    >
      <div
        className="layout_column layout_column--md-7"
      >
        <h1>About</h1>

        <h2>Background</h2>
        <p>I am a professional Software Engineer specializing in Front-end Web Development and Design. I offer a unique blend of technical expertise, creativity, and marketing experience that produce powerful user experience across a multitude of devices.</p>
        <p>I am loyal, personable, and a dedicated individual with the ability to quickly establish strong working relationships. You may find more information about my years of Web Development experience by viewing my resumé.</p>

        <h2>Hire Me</h2>
        <p>Have questions? Please contact me.</p>
      </div>

      <div
        className="layout_column layout_column--md-5 display-none block--md"
      >
        <Image
          src="/me@2x.jpg"
          alt="Chris Woodley"
          className="mb-3"
        />
      </div>
    </div>
  );
}

export default AboutPage;

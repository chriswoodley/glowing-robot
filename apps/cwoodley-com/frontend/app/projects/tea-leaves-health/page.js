'use client';

import React from 'react';
import {
  Image,
  AspectRatioContainer,
} from '@cw/design-system';
import Project from 'components/project';
import ProjectTitle from 'components/project-title';

function TeaLeavesHealthPage() {
  return (
    <Project
      title={(
        <ProjectTitle
          title="Tea Leaves Health"
          subtitle="tealeaveshealth.com"
        />
      )}
      image={(
        <AspectRatioContainer
          size="xlg"
          ratio="2/1"
        >
          <Image
            src="../projects/tealeaveshealth-com.jpg"
            alt="Tea Leaves Health"
            width="1263"
            height="929"
            fill
          />
        </AspectRatioContainer>
      )}
    >
      <p>
        The Tea Leaves Health website exist to promote the business intelligence{' '}
        solutions specifically for the healthcare industry.
      </p>

      <p>
        The primary goals of this website are:
      </p>

      <ul>
        <li>
          Inform users about the patientology, physicianology, and decisionology solutions.
        </li>
        <li>
          Schedule demonstrations.
        </li>
      </ul>

      <h2>
        Full Stack Developer Role
      </h2>

      <p>
        While employed at{' '}
        <a href="http://gyro.com" target="_blank" rel="noopener noreferrer">Gyro</a>{' '}(now Merkle),
        I had the privilege of working with my colleagues to make this project a success. My role{' '}
        as a Full Stack Developer is outlined below:
      </p>

      <ul>
        <li>
          Mobile first front-end development utilizing HTML5, CSS3, and jQuery throughout{' '}
          the entire site build. Minimal PHP code exists only for premises of creating the{' '}
          templates and the contact form functionality.
        </li>
        <li>
          Backend Development of the contact form entailed capturing the user’s data and{' '}
          sending an email notification.
        </li>
        <li>
          Created a streaming build process to concatenate and minify JavaScript and CSS code,{' '}
          auto-prefix browser vendor prefixes, and optimize image file size using Gulp.js
        </li>
        <li>
          Utilized Composer to manage PHP development dependencies.
        </li>
      </ul>

      <h2>
        Challenges
      </h2>

      <p>
        Creating SVGs and applying custom CSS and JavaScript interactions proved to be{' '}
        challenging a task. I did not know some of the peculiarities of working with SVGs.{' '}
        Google and the web development community was a great resource for helping me solve{' '}
        issues as I came across them.
      </p>

      <h2>
        What I Have Learned
      </h2>

      <p className="mb-4">
        SVGs can be styled and animated through CSS. SVGs are easier to work with if optimized{' '}
        through the SVGO command line utility. SVGs have a subset of CSS properties that are{' '}
        only available to SVGs such as “fill” and “stroke”. JavaScript interactions can also be{' '}
        applied to SVGs. SVG stands for Scalable Vector Graphic which means the graphic never{' '}
        loses quality as it scales up.
      </p>
    </Project>
  );
}

export default TeaLeavesHealthPage;

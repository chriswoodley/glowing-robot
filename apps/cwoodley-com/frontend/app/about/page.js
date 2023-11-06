'use client';

import React from 'react';
import { Image } from '@cw/design-system';
import classNames from 'classnames';

function AboutPage() {
  return (
    <>
      <div
        className={classNames(
          'layout_row',
          'layout_row--md',
        )}
      >
        <div
          className={classNames(
            'layout_column',
            'layout_column--md-12',
          )}
        >
          <h1 className="mb-0">About</h1>
        </div>
      </div>

      <div
        className={classNames(
          'layout_row',
          'layout_row--md',
          'mb-2'
        )}
      >
        <div
          className={classNames(
            'layout_column',
            'layout_column--md-7',
            'layout_column--lg-6',
          )}
        >
          <h2>Background</h2>

          <p>With 18 years of web development experience, I have spent the last
          decade specializing in front-end development, mastering JavaScript,
          HTML, CSS, React, Vue.js, and more. My expertise is on creating
          exceptional user interfaces and design systems for Software as a
          Service applications across a multitude of devices.</p>

          <p>I am passionate about creating scalable, reliable, and efficient
          code that enhances the user experience and meets business
          requirements.</p>

          <p className="mb-4">I am loyal, personable, and a dedicated individual
          with the ability to quickly establish strong working relationships.
          You may find more information about experience by viewing
          my resumé.</p>
        </div>

        <div
          className={classNames(
            'layout_column',
            'layout_column--md-3',
            'layout_column--md-offset-1',
            'layout_column--lg-offset-2',
            'display-none',
            'block--md',
            'mt-1--md'
          )}
        >
          <Image
            src="/me@2x.jpg"
            alt="Chris Woodley"
            className="mt-2"
          />
        </div>
      </div>
    </>
  );
}

export default AboutPage;

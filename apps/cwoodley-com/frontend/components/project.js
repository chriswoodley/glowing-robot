import React from 'react';
import classNames from 'classnames';
import {
  useViewportMatch
} from '@cw/design-system';

function Project({ children, image, title }) {
  const isXlgViewport = useViewportMatch({
    value: '1440px'
  });

  return (
    <>
      <div
        className={classNames([
          'layout_row',
          'layout_row--md',
          'layout_row--md-column',
          'layout_row--md-middle',
          'layout_row--xl-row',
          'layout_row--xl-top'
        ])}
      >
        <div
          className={classNames([
            'layout_column',
            'layout_column--md-8',
            'layout_column--lg-7',
            'layout_column--xl-12'
          ])}
        >
          {title}
        </div>
      </div>

      <div
        className={classNames([
          'layout_row',
          'layout_row--md',
          'layout_row--md-column',
          'layout_row--md-middle',
          'layout_row--xl-row',
          'layout_row--xl-top'
        ])}
      >
        <div
          className={classNames([
            'layout_column',
            'layout_column--md-8',
            'layout_column--lg-7',
            'layout_column--xl-6',
            'layout_column--xl-order-2',
            {
              'position-sticky': isXlgViewport
            }
          ])}
        >
          {image}
        </div>

        <div
          className={classNames([
            'layout_column',
            'layout_column--md-8',
            'layout_column--lg-7',
            'layout_column--xl-6'
          ])}
        >
          {children}
        </div>
      </div>
    </>
  );
}

export default Project;

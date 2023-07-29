'use client';

import React from 'react';
import Link from 'next/link';
import {
  Icon
} from '@cw/design-system';

function ProjectTitle({ title, subtitle, url }) {
  return (
    <>
      <h1 className="mb-0">{title}</h1>

      {
        url ? (
          <p className="my-0">
            <Link href={url} target="_blank">
              {subtitle}
              <Icon
                glyph="external-link"
                title={`Visit {subtitle}`}
                size="24"
                className="inline-block"
              />
            </Link>
          </p>
        ) : (
          <p className="my-0">
            {subtitle}
          </p>
        )
      }
    </>
  );
}

export default ProjectTitle;

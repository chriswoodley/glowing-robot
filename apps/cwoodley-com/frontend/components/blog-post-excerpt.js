'use client';

import { Card } from '@cw/design-system';
import { useRouter } from 'next/navigation';
import { useCallback } from 'react';
import { useTheme } from 'styled-components';
import dayjs from 'dayjs';

const localizedFormat = require('dayjs/plugin/localizedFormat');
dayjs.extend(localizedFormat);

function BlogPostExcerpt({ data }) {
  const theme = useTheme();
  const router = useRouter();

  const handleClick = useCallback(() => {
    router.push(`/blog/${data.slug}`);
  }, [ router, data ]);

  return (
    <Card
      onClick={handleClick}
      theme={theme}
      mode="dark"
    >
      <Card.Cover
        size="lg"
        ratio="2/1"
        src={data.image.src}
        alt={data.image.alt}
        width={data.image.width}
        height={data.image.height}
      />

        <Card.Section>
          <p>{dayjs(data.publishedAt).format('LLLL')}</p>
          <h2 className="mb-0">{data.title}</h2>
          <p className="mt-0">{data.readDuration}</p>
        </Card.Section>
    </Card>
  );
}

export default BlogPostExcerpt;

'use client';

import { Image, AspectRatioContainer } from '@cw/design-system';
import { useRouter } from 'next/navigation';
import { useCallback } from 'react';

function BlogPostExcerpt({ data }) {
  const router = useRouter();

  const handleClick = useCallback(() => {
    router.push(`/blog/${data.slug}`);
  }, [ router, data ]);

  return (
    <div onClick={handleClick}>
      <AspectRatioContainer
          size="xlg"
          ratio="2/1"
        >
          <Image
            src={data.image.src}
            alt={data.image.alt}
            width={data.image.width}
            height={data.image.height}
            fill
            />
        </AspectRatioContainer>
        <p>{data.publishedAt}</p>
        <h2 className="mb-0">{data.title}</h2>
        <p className="mt-0">{data.readDuration}</p>
    </div>
  );
}

export default BlogPostExcerpt;

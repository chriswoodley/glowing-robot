'use client';

import 'highlight.js/styles/github-dark-dimmed.css';
import { useEffect } from 'react';
import Markdown from 'markdown-to-jsx';
import hljs from 'highlight.js/lib/common';
import classNames from 'classnames';
import { Image, AspectRatioContainer } from '@cw/design-system';

function BlogPost({ post }) {
  useEffect(() => {
    hljs.highlightAll();
  }, []);

  return (
    <>
      <div
        className={classNames(
          'layout_column',
          'layout_column--md-7',
          'layout_column--lg-6',
        )}
      >
        <h2>{post.metaData.title}</h2>

        <Markdown className="mb-9">
          {post.content}
        </Markdown>
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
        <AspectRatioContainer
          size="xlg"
          ratio="1/1"
        >
          <Image
            className="mt-2"
            src={post.metaData.image.src}
            alt={post.metaData.image.alt}
            width={post.metaData.image.width}
            height={post.metaData.image.width}
            fill
          />
        </AspectRatioContainer>
      </div>
    </>
  );
}

export default BlogPost;

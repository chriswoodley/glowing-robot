import fs from 'fs';
import * as matter from 'gray-matter';
import BlogPost from 'components/blog-post';
import classNames from 'classnames';
import { notFound } from 'next/navigation';

const getPost = (slug) => {
  try {
    const folder = 'content/posts';
    const file = fs.readFileSync(`${folder}/${slug}.md`, 'utf-8');
    const frontMatter = matter(file);
    const metaData = frontMatter.data;
    const content = frontMatter.content;

    return {
      metaData,
      content
    };
  } catch (error) {
    // TODO: log error
    notFound();
  }
};

const BlogPostPage = ({ params: { slug } }) => {
  const post = getPost(slug);

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
          <h1 className="mb-0">Blog</h1>
        </div>
      </div>

      <div
        className={classNames(
          'layout_row',
          'layout_row--md',
          'mb-2'
        )}
      >
        <BlogPost post={post} />
      </div>
    </>
  );
};

export default BlogPostPage;

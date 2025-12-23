import fs from 'fs';
import * as matter from 'gray-matter';
import BlogPost from 'components/blog-post';
import classNames from 'classnames';
import { notFound } from 'next/navigation';
import getPostsMetadata from 'utils/get-posts-metadata';

const getPost = (slug) => {
  try {
    const folder = 'posts/';
    const file = `${folder}${slug}.md`;
    const fileContent = fs.readFileSync(file, 'utf-8');
    const frontMatter = matter(fileContent);
    const metaData = frontMatter.data;
    const content = frontMatter.content;

    return {
      metaData,
      content
    };
  } catch (error) {
    notFound();
  }
};

// this tells next.js to build these routes as static pages
export async function generateStaticParams() {
  const postsMetadata = getPostsMetadata();
  return postsMetadata.map((({ slug }) => ({
    slug
  })));
}

const BlogPostPage = async props => {
  const params = await props.params;

  const {
    slug
  } = params;

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

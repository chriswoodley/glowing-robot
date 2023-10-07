import classNames from 'classnames';
import BlogPosts from 'components/blog-posts';
import fs from 'fs';
import matter from 'gray-matter';

const getPostsMetadata = () => {
  const folder = 'content/posts';
  const files = fs.readdirSync('content/posts');
  const data = files.map((file) => {
    const slug = file.replace('.md', '');
    const content = fs.readFileSync(`${folder}/${file}`, 'utf-8');
    const frontMatter = matter(content).data;
    return {
      ...frontMatter,
      slug
    };
  });

  return data;
};

function BlogPage() {
  const postMetaData = getPostsMetadata();

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
        )}
      >
        <div
          className={classNames(
            'layout_column',
            'layout_column--md-12',
          )}
        >
          <BlogPosts data={postMetaData} />
        </div>
      </div>

    </>
  );
}

export default BlogPage;

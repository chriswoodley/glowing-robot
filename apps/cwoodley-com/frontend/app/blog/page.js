import classNames from 'classnames';
import BlogPosts from 'components/blog-posts';
import getPostsMetadata from 'utils/get-posts-metadata';

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

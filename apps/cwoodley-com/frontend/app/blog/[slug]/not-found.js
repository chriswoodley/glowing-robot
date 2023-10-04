import classNames from 'classnames';
import Link from 'next/link';

export default function NotFound() {
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
          <h2>Not Found</h2>
          <p>Could not find requested the blog post.</p>
          <p className="mb-4">
            <Link href="/blog">Return to Blog</Link>
          </p>
        </div>
      </div>
    </>
  );
}

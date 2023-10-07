import BlogPostExcerpt from "./blog-post-excerpt";
import Grid from "./grid";

function BlogPosts({ data }) {
  return (
    <Grid>
      {
        data.map((postMetaData) => (
          <BlogPostExcerpt key={postMetaData.slug} data={postMetaData} />
        ))
      }
    </Grid>
  );
}

export default BlogPosts;

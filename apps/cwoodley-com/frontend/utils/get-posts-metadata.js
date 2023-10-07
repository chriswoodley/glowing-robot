import fs from 'fs';
import matter from 'gray-matter';

export default function getPostsMetadata() {
  const folder = 'posts/';
  const files = fs.readdirSync(folder);
  const data = files
    .filter((file) => {
      return file.endsWith('.md');
    })
    .map((file) => {
    const slug = file.replace('.md', '');
    const content = fs.readFileSync(`${folder}${file}`, 'utf-8');
    const frontMatter = matter(content).data;
    return {
      ...frontMatter,
      slug
    };
  });

  return data;
}

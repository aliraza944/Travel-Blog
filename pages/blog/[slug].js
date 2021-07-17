import fs from "fs";
import path from "path";
import matter from "gray-matter";
import marked from "marked";
const BlogPost = ({ frontmatter, slug, content }) => {
  return (
    <div>
      <h2>{frontmatter.title}</h2>
    </div>
  );
};

export default BlogPost;

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("posts"));

  const paths = files.map((file) => ({
    params: {
      slug: file.replace(".md", ""),
    },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params: { slug } }) {
  const mdWithMeta = fs.readFileSync(path.join("posts", slug + ".md"));

  const { data: frontmatter, content } = matter(mdWithMeta);
  return {
    props: {
      frontmatter,
      slug,
      content,
    },
  };
}

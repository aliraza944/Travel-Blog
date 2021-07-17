import fs from "fs";
import path from "path";
import matter from "gray-matter";
import marked from "marked";
import useStyles from "./Styles";
import Image from "next/image";
import { Typography } from "@material-ui/core";
const BlogPost = ({ frontmatter, slug, content }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.coverimagecontainer}></div>
      <Image
        layout="responsive"
        width={500}
        height={250}
        src={`/${frontmatter.coverImage}`}
      ></Image>
      <div className={classes.blogcontent}>
        <Typography variant="h1">{frontmatter.title}</Typography>

        <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
      </div>
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

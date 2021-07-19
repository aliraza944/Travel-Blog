import fs from "fs";
import path from "path";
import matter from "gray-matter";
import marked from "marked";
import Image from "next/image";
import { Typography } from "@material-ui/core";
import Navigation from "../../Components/Navigation";
import Footer from "../../Components/Footer";
import Head from "next/head";

import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    margin: "100px 0 0 0",
    fontFamily: "Roboto",
  },
  coverimagecontainer: {
    width: "100%",
  },
  title: {
    fontSize: "2em",
    [theme.breakpoints.up("sm")]: {
      fontSize: "4em",
    },
  },

  blogcontent: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    flexDirection: "column",
    textAlign: "center",
  },
  mdcontent: {
    width: "100%",
    textAlign: "center",

    [theme.breakpoints.up("sm")]: {
      width: "40%",
      textAlign: "left",
    },

    "& p": {
      fontSize: "1em",
      letterSpacing: "0.08em",
      lineHeight: 1.8,
      [theme.breakpoints.up("sm")]: {
        fontSize: "1.8em",
      },
      "& h2": {
        fontSize: "2em",
        fontWeight: "300",
        [theme.breakpoints.up("sm")]: {
          fontSize: "8em",
        },
      },
    },
  },
}));

const BlogPost = ({ frontmatter, slug, content }) => {
  const classes = useStyles();
  return (
    <>
      <Head>
        <title>{frontmatter.title}</title>
      </Head>
      <Navigation />
      <div className={classes.root}>
        <div className={classes.coverimagecontainer}></div>
        <Image
          layout="responsive"
          width={500}
          height={250}
          src={`/${frontmatter.coverImage}`}
        ></Image>
        <div className={classes.blogcontent}>
          <Typography className={classes.title} variant="h1">
            {frontmatter.title}
          </Typography>

          <div
            className={classes.mdcontent}
            dangerouslySetInnerHTML={{ __html: marked(content) }}
          ></div>
        </div>
      </div>
      <Footer />
    </>
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

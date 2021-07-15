import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Shop from "../Components/Shop";
import { Typography } from "@material-ui/core";

import Header from "../Components/Header";
import FeaturedSection from "../Components/FeaturedSection";
export default function Home({ posts }) {
  return (
    <div>
      <Header />

      <main>
        <FeaturedSection
          data={posts}
          type="featured"
          buttonText="featured stories"
        />
        <FeaturedSection
          data={posts}
          type="journal"
          buttonText="journal articles"
        />
        <Shop />
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const files = fs.readdirSync(path.join(process.cwd(), "posts"));

  const posts = files.map((file) => {
    // creating a uniques slug for each file
    const slug = file.replace(".md", "");

    // creating frontMatter

    const mdWithMeta = fs.readFileSync(
      path.join(process.cwd(), "posts", file),
      "utf-8"
    );

    const { data: frontMatter } = matter(mdWithMeta);

    return {
      slug,
      frontMatter,
    };
  });

  return {
    props: {
      posts,
    },
  };
}

import { Typography } from "@material-ui/core";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Header from "../Components/Header";
import FeaturedSection from "../Components/FeaturedSection";
export default function Home() {
  return (
    <div>
      <Header />

      <main>
        <FeaturedSection />
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const files = fs.readdirSync(path.join("posts"));

  const posts = files.map((file) => {
    // creating a uniques slug for each file
    const slug = file.replace(".md", "");

    // creating frontMatter

    const mdWithMeta = fs.readFileSync(path.join("posts", file), "utf-8");

    const { data: frontMatter } = matter(mdWithMeta);

    return {
      slug,
      frontMatter,
    };
  });

  console.log(posts);
  return {
    props: {
      post: "my post",
    },
  };
}

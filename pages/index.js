import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Shop from "../Components/Shop";
import { useState } from "react";
import Header from "../Components/Header";
import FeaturedSection from "../Components/FeaturedSection";
import Navigation from "../Components/Navigation";
import Footer from "../Components/Footer";
import HomePage from "../Components/HomePage";
export default function Home({ posts }) {
  const [home, setHome] = useState(true);
  return (
    <div>
      <Header />

      <main>
        {home ? (
          <HomePage />
        ) : (
          <>
            <Navigation />
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
            <Footer />
          </>
        )}
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

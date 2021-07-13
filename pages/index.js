import { Typography } from "@material-ui/core";
import Head from "next/head";
import ContentCard from "../Components/Card";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Another Escape</title>
        <meta name="description" content="A traveling blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <ContentCard />
      </main>
    </div>
  );
}

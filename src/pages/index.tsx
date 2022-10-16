import type { NextPage } from "next";
import Head from "next/head";
import { Main } from "src/components/main";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>HOME | Architecture website</title>
        <meta name="description" content="architecture" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main />
    </>
  );
};

export default Home;

import type { NextPage } from "next";
import Head from "next/head";
import { Contacts as ContactsLayout } from "src/components/contacts";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>CONTACTS | Architecture website</title>
        <meta name="description" content="architecture" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ContactsLayout />
    </>
  );
};

export default Home;

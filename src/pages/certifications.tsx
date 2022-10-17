import type { NextPage } from "next";
import Head from "next/head";
import { Certifications as CertificationsLayout } from "src/components/certifications";

const Certifications: NextPage = () => {
  return (
    <>
      <Head>
        <title>CERTIFICATIONS | Architecture website</title>
        <meta name="description" content="architecture" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <CertificationsLayout />
    </>
  );
};

export default Certifications;

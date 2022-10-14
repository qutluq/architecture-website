import type { AppProps } from "next/app";

import "src/styles/globals.css";

import { Fragment } from "react";
import { Header } from "src/components/header";
import { Footer } from "src/components/footer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Header />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </Fragment>
  );
}

export default MyApp;

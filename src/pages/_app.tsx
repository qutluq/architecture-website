import type { AppProps } from 'next/app'

import 'src/styles/globals.css'

import { Fragment } from 'react'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <main>
        <Component {...pageProps} />
      </main>
    </Fragment>
  )
}

export default MyApp

import 'bootstrap/dist/css/bootstrap.css'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import React from 'react'
import Head from 'next/head'
import Script from 'next/script'
import DefaultTemplate from '../ui/template/DefaultTemplate'

function MyApp({ Component, pageProps }: AppProps) {
  return <React.Fragment>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>

    <Script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js"
    
    />

    <DefaultTemplate>
      <Component {...pageProps} />
    </DefaultTemplate>
  </React.Fragment>
}

export default MyApp

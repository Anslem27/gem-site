import NextDocument, { Html, Head, Main, NextScript } from 'next/document'

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta name="description" content="Gem Music is a lightweight modern music app, with more than you could ever imagine." />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Gem App" />
          <meta property="og:description" content="Gem Music is a lightweight modern music app, with more than you could ever imagine." />

          {/* <link rel="manifest" href="/static/favicon/site.webmanifest" /> */}
          <link rel="shortcut icon" href="/static/favicon/favicon.ico" />
          <meta name="msapplication-TileColor" content="#000000" />
          <meta name="msapplication-config" content="/static/favicon/browserconfig.xml" />
          <meta name="theme-color" content="#000" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
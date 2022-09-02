import React from 'react';
import Document, { Head, Html, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const pageProps = this.props?.__NEXT_DATA__?.props?.pageProps;
    return (
      <Html>
        <Head />
        <body className="bg-gray-100">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

import React from 'react';
import type { AppProps } from 'next/app';

import '../content';

import '../styles/globals.css';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Component {...pageProps} />
);

export default MyApp;

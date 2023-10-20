import React from 'react';
import { ChevronLeftIcon } from '@heroicons/react/20/solid';
import clsx from 'clsx';
import Head from 'next/head';
import Link from 'next/link';

export type Props = {
  title: string;
  children: JSX.Element | JSX.Element[];
  container?: boolean;
};

const Layout = ({ title, children, container = false }: Props): JSX.Element => (
  <>
    <Head>
      <title>7 Wonders Duel Companion</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <header className="items-center px-4 py-2 bg-white shadow-md grid grid-cols-[2fr_8fr_2fr]">
      <span className="flex">
        <Link href="/" className="inline-block p-2">
            <ChevronLeftIcon
              className="w-5 h-5 text-gray-400"
              aria-hidden="true"
            />
        </Link>
      </span>
      <span className="overflow-hidden text-center text-ellipsis whitespace-nowrap">
        {title.split(' ').slice(1).join(' ')}
      </span>
    </header>
    <main className={clsx(container && 'max-w-lg px-4 py-6 mx-auto')}>
      {children}
    </main>
  </>
);

export default Layout;

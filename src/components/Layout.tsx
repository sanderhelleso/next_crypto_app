import React, { FunctionComponent } from 'react';
import Head from 'next/head';

interface ILayout {
  children: React.ReactNode;
  title: string;
  description?: string;
  footer?: boolean;
}

const Layout: FunctionComponent<ILayout> = (props) => {
  const { children, title, description } = props;

  return (
    <>
      <Head>
        <title>{`${title} | Crypto Market`}</title>
        <meta
          name='description'
          content={description ?? 'Crypto market prices'}
        />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1, minimum-scale=1'
        />
      </Head>
      <main className='bg-background flex min-h-screen items-center justify-center'>
        {children}
      </main>
    </>
  );
};

export default Layout;

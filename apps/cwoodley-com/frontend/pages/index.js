import Head from 'next/head';
import Header from 'components/header';

export default function Home() {
  return (
    <>
      <Head>
        <title>Chris Woodley</title>
        <meta name="description" content="Chris Woodley" />
      </Head>

      <Header />

      <main>
        main content here
      </main>
    </>
  );
}

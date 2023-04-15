import Head from 'next/head';
import Logo from '../components/logo';

export default function Home() {
  return (
    <>
      <Head>
        <title>Chris Woodley</title>
        <meta name="description" content="Chris Woodley" />
      </Head>

      <main>
        <Logo />
      </main>
    </>
  );
}

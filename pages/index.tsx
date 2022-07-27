import type { NextPage } from "next";
import Head from "next/head";
import { Container } from "../components/global/container";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Shakirul Hasan Khan</title>
        <meta name="description" content="Portfolio of Shakirul Hasan Khan" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>Hello from Shakirul Hasan</Container>
    </div>
  );
};

export default Home;

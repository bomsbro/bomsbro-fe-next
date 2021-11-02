import type { NextPage } from "next";
import AppLayout from "@components/AppLayout";
import Head from "next/head";
// import Image from "next/image";
// import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Bomsbro`s | Home</title>
      </Head>
      <AppLayout>
        <div>hello Next</div>
      </AppLayout>
    </>
  );
};

export default Home;

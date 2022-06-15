import React from "react";
import Head from "next/head";
import Layout from "../../components/layout";

export default function settings() {
  return (
    <div>
      <Layout>
        <Head>
          <title>Settings.</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        settings
      </Layout>
    </div>
  );
}

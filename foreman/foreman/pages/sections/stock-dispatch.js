import React from "react";
import Head from "next/head";
import Layout from "../../components/layout";

export default function stockDispatch() {
  return (
    <div>
      <Layout>
        <Head>
          <title>Stock Dispatch.</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        stock-dispatch page goes here
      </Layout>
    </div>
  );
}

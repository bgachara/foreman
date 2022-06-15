import React from "react";
import Head from "next/head";
import Layout from "../../components/layout";

export default function expenseInvoices() {
  return (
    <div>
      <Layout>
        {" "}
        <Head>
          <title>Expense Invoices.</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        expenseInvoices page goes here.
      </Layout>
    </div>
  );
}

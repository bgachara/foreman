import React from "react";
import Head from "next/head";
import Layout from "../../components/layout";

export default function expenseReports() {
  return (
    <div>
      <Layout>
        <Head>
          <title>Expenses Reports.</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <header class="bg-gray-50">
          <div class="max-w-screen-xl px-1 py-2 mx-auto sm:px-6 lg:px-8">
            <div class="flex items-center justify-between gap-4">
              <div>
                <h1 class="text-xl font-semibold text-gray-700 sm:text-xl">
                  Expense Reports
                </h1>
                <p class="mt-1 text-sm text-gray-500">
                  View the Expense Reports
                </p>
              </div>
              <div class="flex items-center gap-4">
                <div class="relative">
                  <label class="sr-only" for="search">
                    {" "}
                    Search{" "}
                  </label>

                  <input
                    class="w-full h-10 pl-4 pr-10 text-sm bg-white border-none rounded-full shadow-sm sm:w-56"
                    id="search"
                    type="search"
                    placeholder="Search..."
                  />

                  <button
                    class="absolute p-2 text-gray-600 transition -translate-y-1/2 rounded-full hover:text-gray-700 bg-gray-50 top-1/2 right-1"
                    type="button"
                    aria-label="Submit Search"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </header>
      </Layout>
    </div>
  );
}

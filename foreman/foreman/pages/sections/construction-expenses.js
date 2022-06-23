import React from "react";
import Head from "next/head";
import Layout from "../../components/layout";

export default function constructionExpenses() {
  return (
    <div>
      <Layout>
        <Head>
          <title>Construction Expenses.</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div>
          <header className="bg-slate-300">
            <div className="max-w-screen-xl px-1 py-2 mx-auto sm:px-6 lg:px-8">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <h1 className="text-xl font-semibold text-gray-700 sm:text-xl">
                    Construction Expenses
                  </h1>
                  <p className="mt-1 text-sm text-gray-500">
                    Capture and Record Construction Expenses
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <label className="sr-only" htmlFor="search">
                      {" "}
                      Search{" "}
                    </label>

                    <input
                      className="w-full h-10 pl-4 pr-10 text-sm bg-white border-none rounded-full shadow-sm sm:w-56"
                      id="search"
                      type="search"
                      placeholder="Search..."
                    />

                    <button
                      className="absolute p-2 text-gray-600 transition -translate-y-1/2 rounded-full hover:text-gray-700 bg-gray-50 top-1/2 right-1"
                      type="button"
                      aria-label="Submit Search"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </header>
        </div>
      </Layout>
    </div>
  );
}

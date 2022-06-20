import React from "react";
import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/layout";
import { ChartBarIcon, CashIcon, UserAddIcon } from "@heroicons/react/outline";

export default function capture() {
  return (
    <div>
      <Layout>
        <Head>
          <title>Project setup</title>
          <link rel="icon" href="/favicon.ico" />
          <script src="https://cdn.jsdelivr.net/npm/chart.js@2.8.0"></script>
        </Head>
        <header class="bg-slate-300">
          <div class="max-w-screen-xl px-1 py-2 mx-auto sm:px-6 lg:px-8">
            <div class="flex items-center justify-between gap-4">
              <div>
                <h1 class="text-xl font-semibold text-gray-700 sm:text-xl">
                  Project Setup
                </h1>
                <p class="mt-1 text-sm text-gray-500">
                  Start creating a project.
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
        <div>
          <div className="flex flex-row columns-3 ">
            <div className="flex items-center w-full justify-center py-8">
              <div className="max-w-sm rounded shadow bg-white dark:bg-gray-800">
                <div className="flex">
                  <div className="px-6 py-5">
                    <div className="flex flex-row gap-2">
                      <ChartBarIcon className="w-4 h-4 opacity-75"></ChartBarIcon>
                      <p className="text-base font-medium leading-none text-gray-800 dark:text-gray-100">
                        Construction Stock
                      </p>
                    </div>
                    <p className="text-xs leading-3 text-gray-500 dark:text-gray-400 pt-2">
                      Create and manage your stock.
                    </p>
                    <p className="text-xl font-semibold leading-tight bg-white dark:text-gray-100 pt-6 pt-3">
                      Ksh 48,900
                    </p>
                    <div className="pt-4">
                      <Link href="/sections/construction-stock">
                        <button className="py-2 px-4 text-xs font-semibold leading-3 bg-slate-700 rounded hover:bg-slate-500 focus:outline-none text-white">
                          Add Stock
                        </button>
                      </Link>
                    </div>
                  </div>
                  <div className="px-3">
                    <img src="https://i.ibb.co/34gPtCT/bg.png" alt="medal" />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center w-full justify-center py-8">
              <div className="max-w-sm rounded shadow bg-white dark:bg-gray-800">
                <div className="flex">
                  <div className="px-6 py-5">
                    <div className="flex flex-row gap-2">
                      <CashIcon className="w-4 h-4 opacity-75"></CashIcon>
                      <p className="text-base font-medium leading-none text-gray-800 dark:text-gray-100">
                        Construction Expenses
                      </p>
                    </div>
                    <p className="text-xs leading-3 text-gray-500 dark:text-gray-400 pt-2">
                      Create and manage your expenses.
                    </p>
                    <p className="text-xl font-semibold leading-tight bg-white dark:text-gray-100 pt-6 pt-3">
                      Ksh 30,900
                    </p>
                    <div className="pt-4">
                      <Link href="/sections/construction-expenses">
                        <button className="py-2 px-4 text-xs font-semibold leading-3 bg-slate-700 rounded hover:bg-slate-500 focus:outline-none text-white">
                          Add Expenses
                        </button>
                      </Link>
                    </div>
                  </div>
                  <div className="px-3">
                    <img src="https://i.ibb.co/34gPtCT/bg.png" alt="medal" />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center w-full justify-center py-8">
              <div className="max-w-sm rounded shadow bg-white dark:bg-gray-800">
                <div className="flex">
                  <div className="px-6 py-5">
                    <div className="flex flex-row gap-2">
                      <UserAddIcon className="w-4 h-4 opacity-75"></UserAddIcon>
                      <p className="text-base font-medium leading-none text-gray-800 dark:text-gray-100">
                        Labour
                      </p>
                    </div>
                    <p className="text-xs leading-3 text-gray-500 dark:text-gray-400 pt-2">
                      Create and manage your labour.
                    </p>
                    <p className="text-xl font-semibold leading-tight bg-white dark:text-gray-100 pt-6 pt-3">
                      Hrs 200
                    </p>
                    <div className="pt-4">
                      <Link href="/sections/labour">
                        <button className="py-2 px-4 text-xs font-semibold leading-3 bg-slate-700 rounded hover:bg-slate-500 focus:outline-none text-white">
                          Add Labour
                        </button>
                      </Link>
                    </div>
                  </div>
                  <div className="px-3">
                    <img src="https://i.ibb.co/34gPtCT/bg.png" alt="medal" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}

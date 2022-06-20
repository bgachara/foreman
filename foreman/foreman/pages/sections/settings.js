import React from "react";
import Head from "next/head";
import Layout from "../../components/layout";
import { FolderAddIcon } from "@heroicons/react/outline";
import Link from "next/link";

export default function settings() {
  return (
    <div>
      <Layout>
        <Head>
          <title>Settings.</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <header className="bg-slate-300">
          <div className="max-w-screen-xl px-1 py-2 mx-auto sm:px-6 lg:px-8">
            <div className="flex items-center justify-between gap-4">
              <div>
                <h1 className="text-xl font-semibold text-gray-700 sm:text-xl">
                  Project Setup
                </h1>
                <p className="mt-1 text-sm text-gray-500">
                  Set up and start a project
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
        <div className="">
          <div className="w-11/12 mx-auto mb-4 my-6 md:w-5/12 shadow sm:px-10 sm:py-6 py-4 px-4 bg-white dark:bg-gray-800 rounded-md">
            <div className="flex pb-2 justify-center">
              <div className="-ml-1 text-gray-600 dark:text-gray-400">
                <FolderAddIcon className="w-7 h-7 opacity-75"></FolderAddIcon>
              </div>
              <p className="text-lg text-gray-800 dark:text-gray-100 font-semibold pl-2">
                No new projects yet.
              </p>
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-sm text-gray-600 dark:text-gray-400 pb-3 font-normal mx-auto">
                Get started by creating a new project.
              </p>
              <Link href="/forms/project-setup">
                <button className="focus:outline-none items-center bg-slate-700 transition duration-150 ease-in-out hover:bg-slate-500 rounded text-white px-3 py-2 text-xs mx-auto">
                  Create project
                </button>
              </Link>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}

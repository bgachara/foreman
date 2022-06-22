import React from "react";
import Head from "next/head";
import Layout from "../../components/layout";

export default function projectsetup() {
  return (
    <div>
      <Layout>
        <Head>
          <title>Project setup</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div>
          <header className="bg-slate-300">
            <div className="max-w-screen-xl px-1 py-2 mx-auto sm:px-6 lg:px-8">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <h1 className="text-xl font-semibold text-gray-700 sm:text-xl">
                    Project Setup
                  </h1>
                  <p className="mt-1 text-sm text-gray-500">
                    Start creating a project.
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
          <div>
            <form>
              <div className="grid gap-3 mb-3 mx-4 mt-4 lg:grid-cols-3">
                <div className="ml-2 mt-2">
                  <label
                    htmlFor="first_name"
                    className="block mb-1 ml-1 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Project name
                  </label>
                  <input
                    type="text"
                    id="first_name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-slate-900 focus:border-slate-900 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-slate-500 dark:focus:border-slate-500"
                    placeholder="Anniversary"
                    required=""
                  />
                </div>
                <div className="ml-2 mt-2">
                  <label
                    htmlFor="last_name"
                    className="block mb-1 ml-1 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Location
                  </label>
                  <input
                    type="text"
                    id="last_name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="CBD"
                    required=""
                  />
                </div>
                <div className="ml-2 mt-2">
                  <label
                    htmlFor="company"
                    className="block mb-1 ml-1 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="SEB estates"
                    required=""
                  />
                </div>
                <div className="ml-2 mt-2">
                  <label
                    htmlFor="first_name"
                    className="block mb-1 ml-1 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Starting Cost
                  </label>
                  <input
                    type="text"
                    id="first_name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="1,000,000"
                    required=""
                  />
                </div>
                <div className="ml-2 mt-2">
                  <label
                    htmlFor="last_name"
                    className="block mb-1 ml-1 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Final Estimate
                  </label>
                  <input
                    type="text"
                    id="last_name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="12,000,000"
                    required=""
                  />
                </div>
                <div className="ml-2 mt-2">
                  <label
                    htmlFor="company"
                    className="block mb-1 ml-1 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Target Margin
                  </label>
                  <input
                    type="text"
                    id="company"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="40%"
                    required=""
                  />
                </div>
                <div className="ml-2 mt-2">
                  <label
                    htmlFor="phone"
                    className="block mb-1 ml-1 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Start Date
                  </label>
                  <input
                    type="date"
                    id="phone"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="01/12/2022"
                    pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                    required=""
                  />
                </div>
                <div className="ml-2 mt-2">
                  <label
                    htmlFor="website"
                    className="block mb-1 ml-1 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    End Date
                  </label>
                  <input
                    type="date"
                    id="website"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="09/12/2022"
                    required=""
                  />
                </div>
                <div className="ml-2 mt-2">
                  <label
                    htmlFor="visitors"
                    className="block mb-1 ml-1 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Estimated Duration
                  </label>
                  <input
                    type="number"
                    id="visitors"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder=""
                    required=""
                    disabled
                  />
                </div>
                <div className="m-2">
                  <label
                    htmlFor="email"
                    className="block mb-2 ml-1 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Project Type
                  </label>
                  <input
                    type="name"
                    id="name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Apartments / Mixed-use"
                    required=""
                  />
                </div>
                <div className="m-2">
                  <label
                    htmlFor="email"
                    className="block mb-2 ml-1 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Project Manager
                  </label>
                  <input
                    type="name"
                    id="name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Doe John"
                    required=""
                  />
                </div>
                <div className="m-2">
                  <label
                    htmlFor="email"
                    className="block mb-2 ml-1 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Manager Contacts
                  </label>
                  <input
                    type="phone"
                    id="contacts"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="0789 909 909"
                    required=""
                  />
                </div>
              </div>

              {/* <div classNameName="m-2">
                <label
                  for="password"
                  classNameName="block mb-1 ml-1 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Miscellanous
                </label>
                <input
                  type="text"
                  id="misc"
                  classNameName="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="•••••••••"
                  required=""
                />
              </div> */}
              {/* <div classNameName="m-2">
                <label
                  for="confirm_password"
                  classNameName="block mb-1 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Confirm password
                </label>
                <input
                  type="password"
                  id="confirm_password"
                  classNameName="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="•••••••••"
                  required=""
                />
              </div> */}
              <div className="flex items-start mb-6 ml-7 mt-4">
                <div className="flex items-center h-5">
                  <input
                    id="remember"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                    required=""
                  />
                </div>
                <label
                  htmlFor="remember"
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                >
                  I have confirmed the details above.{" "}
                  {/* <a
                    href="#"
                    classNameName="text-blue-600 hover:underline dark:text-blue-500"
                  >
                    terms and conditions
                  </a> */}
                </label>
              </div>
              <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm ml-7 w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </Layout>
    </div>
  );
}

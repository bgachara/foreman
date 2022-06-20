/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import Link from "next/link";
import Head from "next/head";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import {
  BellIcon,
  BookOpenIcon,
  CalculatorIcon,
  CashIcon,
  ChartBarIcon,
  ClipboardIcon,
  ClipboardListIcon,
  CogIcon,
  CubeIcon,
  DocumentAddIcon,
  FilterIcon,
  MenuIcon,
  PresentationChartLineIcon,
  UserCircleIcon,
  XIcon,
} from "@heroicons/react/outline";

const navigation = [
  { name: "Dashboard", href: "#", current: true },
  { name: "Capture", href: "/capture", current: false },
  { name: "Dispatch", href: "#", current: false },
  { name: "Reports", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

// Sample functional react components.

// import React from 'react'

// export default function index() {
//   return (
//     <div>index</div>
//   )
// }

export default function Example() {
  return (
    <div className="h-screen">
      <div className="h-0.5/6">
        <Disclosure as="nav" className="bg-gray-800">
          {({ open }) => (
            <>
              <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-16">
                  <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                    {/* Mobile menu button*/}
                    <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XIcon className="block h-6 w-6" aria-hidden="true" />
                      ) : (
                        <MenuIcon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      )}
                    </Disclosure.Button>
                  </div>
                  <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                    <div className="hidden sm:block sm:ml-6">
                      {/* <div className="flex space-x-4">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.current
                              ? "bg-gray-900 text-white"
                              : "text-gray-300 hover:bg-gray-700 hover:text-white",
                            "px-3 py-2 rounded-md text-sm font-medium"
                          )}
                          aria-current={item.current ? "page" : undefined}
                        >
                          {item.name}
                        </a>
                      ))}
                    </div> */}
                    </div>
                  </div>

                  <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                    <button
                      type="button"
                      className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                    >
                      <span className="sr-only">View notifications</span>
                      <BellIcon className="h-6 w-6" aria-hidden="true" />
                    </button>

                    {/* Profile dropdown */}
                    <Menu as="div" className="ml-3 relative">
                      <div>
                        <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                          <span className="sr-only">Open user menu</span>
                          {/* <img
                          className="h-8 w-8 rounded-full"
                          src=".../styles/images/pic-unsplash.jpg"
                          alt=""
                        /> */}
                          <UserCircleIcon
                            className="h-6 w-6 bg-gray-800 rounded-full text-gray-400 hover:text-white focus:outline-none"
                            aria-hidden="true"
                          ></UserCircleIcon>
                        </Menu.Button>
                      </div>
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="#"
                                className={classNames(
                                  active ? "bg-gray-100" : "",
                                  "block px-4 py-2 text-sm text-gray-700"
                                )}
                              >
                                Your Profile
                              </a>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="#"
                                className={classNames(
                                  active ? "bg-gray-100" : "",
                                  "block px-4 py-2 text-sm text-gray-700"
                                )}
                              >
                                Settings
                              </a>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="#"
                                className={classNames(
                                  active ? "bg-gray-100" : "",
                                  "block px-4 py-2 text-sm text-gray-700"
                                )}
                              >
                                Sign out
                              </a>
                            )}
                          </Menu.Item>
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="sm:hidden">
                <div className="px-2 pt-2 pb-3 space-y-1">
                  {navigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      className={classNames(
                        item.current
                          ? "bg-gray-900 text-white"
                          : "text-gray-300 hover:bg-gray-700 hover:text-white",
                        "block px-3 py-2 rounded-md text-base font-medium"
                      )}
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
      <main className="h-5/6">
        <div className="max-w-7xl mx-auto py-1 sm:px-2 lg:px-3 h-full">
          <div className="flex flex-row justify-between space-x-5 px-1 py-3 h-full sm:px-0">
            <div className="border-2 border-dashed border-gray-300 rounded-lg h-full w-1/4 flex flex-col justify-between bg-white ">
              <div className="px-4 py-2">
                <nav className="flex flex-col mt-8 space-y-1">
                  <Link href="/sections/settings">
                    <a
                      className="flex items-center px-4 py-2 text-gray-700
                      bg-gray-100 rounded-lg"
                    >
                      <CogIcon className="w-5 h-5 opacity-75"> </CogIcon>
                      <span className="ml-3 text-sm font-medium">
                        {" "}
                        Settings{" "}
                      </span>
                    </a>
                  </Link>
                  <details className="group">
                    <summary className="flex items-center px-4 py-2 text-gray-500 rounded-lg cursor-pointer hover:bg-gray-100 hover:text-gray-700">
                      <DocumentAddIcon className="w-5 h-5 opacity-75"></DocumentAddIcon>
                      <span className="ml-3 text-sm font-medium">
                        {" "}
                        Capture{" "}
                      </span>

                      <span className="ml-auto transition duration-300 shrink-0 group-open:-rotate-180">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-5 h-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                    </summary>

                    <nav className="mt-1.5 ml-8 flex flex-col">
                      <Link href="/sections/construction-stock">
                        <a className="flex items-center px-4 py-2 text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700">
                          <ChartBarIcon className="w-5 h-5 opacity-75"></ChartBarIcon>
                          <span className="ml-3 text-sm font-medium">
                            {" "}
                            Construction Stock{" "}
                          </span>
                        </a>
                      </Link>
                      <Link href="/sections/construction-expenses">
                        <a className="flex items-center px-4 py-2 text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700">
                          <CashIcon className="w-5 h-5 opacity-75"></CashIcon>
                          <span className="ml-3 text-sm font-medium">
                            {" "}
                            Construction Expenses{" "}
                          </span>
                        </a>
                      </Link>
                    </nav>
                  </details>
                  <Link href="/sections/stock-dispatch">
                    <a className="flex items-center px-4 py-2 text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700">
                      <ClipboardListIcon className="w-5 h-5 opacity-75"></ClipboardListIcon>
                      <span className="ml-3 text-sm font-medium">
                        {" "}
                        Stock Dispatch{" "}
                      </span>
                    </a>
                  </Link>
                  <Link href="/sections/expense-invoices">
                    <a className="flex items-center px-4 py-2 text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700">
                      <CalculatorIcon className="w-5 h-5 opacity-75"></CalculatorIcon>
                      <span className="ml-3 text-sm font-medium">
                        {" "}
                        Expense Invoices{" "}
                      </span>
                    </a>
                  </Link>

                  <details className="group">
                    <summary className="flex items-center px-4 py-2 text-gray-500 rounded-lg cursor-pointer hover:bg-gray-100 hover:text-gray-700">
                      <PresentationChartLineIcon className="w-5 h-5 opacity-75"></PresentationChartLineIcon>

                      <span className="ml-3 text-sm font-medium">
                        {" "}
                        Reports{" "}
                      </span>

                      <span className="ml-auto transition duration-300 shrink-0 group-open:-rotate-180">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-5 h-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                    </summary>

                    <nav className="mt-1.5 ml-8 flex flex-col">
                      <Link href="/sections/stock-reports">
                        <a className="flex items-center px-4 py-2 text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700">
                          <BookOpenIcon className="w-5 h-5 opacity-75"></BookOpenIcon>
                          <span className="ml-3 text-sm font-medium">
                            {" "}
                            Stock Reports{" "}
                          </span>
                        </a>
                      </Link>
                      <Link href="/sections/expense-reports">
                        <a className="flex items-center px-4 py-2 text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700">
                          <CubeIcon className="w-5 h-5 opacity-75"></CubeIcon>

                          <span className="ml-3 text-sm font-medium">
                            {" "}
                            Expense Reports{" "}
                          </span>
                        </a>
                      </Link>
                      <Link href="/sections/non-expensereports">
                        <a className="flex items-center px-4 py-2 text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700">
                          <FilterIcon className="w-5 h-5 opacity-75"></FilterIcon>

                          <span className="ml-3 text-sm font-medium">
                            {" "}
                            Non-expense Reports{" "}
                          </span>
                        </a>
                      </Link>
                      {/* <form action="/logout">
                          <button
                            type="submit"
                            class="flex items-center w-full px-4 py-2 text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              class="w-5 h-5 opacity-75"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              stroke-width="2"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                              />
                            </svg>

                            <span class="ml-3 text-sm font-medium">
                              {" "}
                              Logout{" "}
                            </span>
                          </button>
                        </form> */}
                    </nav>
                  </details>
                </nav>
              </div>

              <div className="sticky inset-x-0 bottom-0 py-3">
                <a
                  href=""
                  className="flex items-center p-4 bg-white hover:bg-gray-50 shrink-0"
                >
                  {/* <img
                    className="object-cover w-10 h-10 rounded-full"
                    src=".../styles/images/pic-unsplash.jpg"
                    alt="Sbd"
                  /> */}

                  <div className="ml-1.5">
                    <p className="text-xs">
                      <strong className="block font-medium">SEB Estates</strong>

                      <span> edwin@sebestates.com </span>
                    </p>
                  </div>
                </a>
              </div>
            </div>
            <div className="border-2 border-dashed border-gray-300 rounded-lg h-full w-3/4"></div>
          </div>
        </div>
      </main>

      <footer className="p-3 h-0.4/6 bg-gray-300 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2022{" "}
          <a
            href="https://brainsofttechnologies.com"
            className="hover:underline"
          >
            Brainsoft Technologies™
          </a>
          . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6 ">
              About
            </a>
          </li>
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Contact
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}

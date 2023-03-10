import React from "react";
import Link from "next/link";
import { useSelector } from "react-redux";
import Header from "../src/components/Header";
import Barner from "../src/components/Barner";
import Item from "../src/components/Item";
import Image from "next/image";
import Customer from "../src/components/Customer";

const AdminDashboard = () => {
  const { user } = useSelector((state: any) => state.user);
  type itemsTypes = {
    image: string;
    title: string;
    description: string;
    updated: string;
  };
  const items = [
    {
      image:
        "/image/dropdown.png",
      title: "Dropbox",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      updated: "updated 30m ago",
    },
    {
      image: "/image/medium.png",
      title: "Medium",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      updated: "updated 30m ago",
    },
    {
      image: "/image/slack.jpg",
      title: "Slack",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      updated: "updated 30m ago",
    },
    {
      image: "/image/dropdown.png",
      title: "Dropbox",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      updated: "updated 30m ago",
    },
    {
      image: "/image/slack.jpg",
      title: "Slack",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      updated: "updated 30m ago",
    },
    {
      image: "/image/medium.png",
      title: "Medium",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      updated: "updated 30m ago",
    },
  ];
  console.log("Login info :", user);
  return (
    <div className="container ml-64 w-full h-full bg-slate-100">
           <Header />
           <Barner />
           <Customer />
           <section className="container bg-slate-100 h-full w-full mt-10 mr-10">
               <div className=" grid grid-cols-3 gap-4">
                     {items &&
                       items.map((item: itemsTypes) => (
                    <Item
                      key={item.title}
                      image={item.image}
                      title={item.title}
                      description={item.description}
                      updated={item.updated}
                    />
                 ))}
              </div>
              <div className="flex justify-center w-full mt-10">
                <nav aria-label="Page navigation example">
                  <ul className="flex list-style-none">
                    <li className="page-item">
                      <a
                        className="page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300  text-gray-800 hover:text-gray-800 focus:shadow-none"
                        href="#" aria-label="Previous">
                       <span aria-hidden="true">&laquo;</span>
                      </a>
                    </li>
                    <li className="page-item">
                      <a
                        className="page-link relative block py-1.5 px-3 rounded-full bg-blue-700 border-0 bg-transparent outline-none transition-all duration-300  text-white hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
                         href="#">1
                      </a>
                    </li>
                    <li className="page-item">
                      <a
                        className="page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300  text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
                        href="#">2
                      </a>
                    </li>
                    <li className="page-item">
                      <a
                        className="page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300  text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
                        href="#">3
                      </a>
                    </li>
                    <li className="page-item">
                      <a
                       className="page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300  text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
                        href="#" aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
          </section>

        <aside
             id="cta-button-sidebar"
              className=" fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
              aria-label="Sidebar">
          <div className="flex flex-col h-full px-3 justify-between py-4 overflow-y-auto bg-[var(--black)]    dark:bg-gray-800">
            <div>
                <div>
                  <div>
                    <p className=" side-bar-links px-4">CassVita LOGO</p>
                  </div>
                  <div className=" p-4">
                    <p className=" side-bar-links px-0"> CassVita</p>
                    <p className=" paragraph">Welcome! {user && user.email}</p>
                  </div>
                </div>
              <div>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className=" side-bar-links">
                      <svg
                       aria-hidden="true"
                       className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                       fill="currentColor"
                       viewBox="0 0 20 20"
                       xmlns="http://www.w3.org/2000/svg">
                       <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                       <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                      </svg>
                      <span className="ml-3">Dashboard</span>
                    </a>
                  </li>
                    <li>
                      <a href="#" className="side-bar-links">
                        <svg
                          aria-hidden="true"
                           className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                            fill="currentColor"
                           viewBox="0 0 20 20"
                         xmlns="http://www.w3.org/2000/svg">
                         <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
                        </svg>
                        <span className="flex-1 ml-3 whitespace-nowrap">BDC</span>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="side-bar-links">
                        <svg
                         aria-hidden="true"
                          className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg">
                          <path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"></path>
                          <path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path>
                        </svg>
                        <span className="flex-1 ml-3 whitespace-nowrap">
                          Precuments
                        </span>
                        <span className="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">
                         3
                        </span>
                      </a>
                   </li>
                    <li>
                      <a href="#" className="side-bar-links">
                        <svg
                          aria-hidden="true"
                          className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                        <span className="flex-1 ml-3 whitespace-nowrap">Users</span>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="side-bar-links">
                        <svg
                          aria-hidden="true"
                          className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                        <span className="flex-1 ml-3 whitespace-nowrap">Farmers</span>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="side-bar-links">
                        <svg
                          aria-hidden="true"
                          className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                        <span className="flex-1 ml-3 whitespace-nowrap">Logout</span>
                      </a>
                    </li>
                </ul>
              </div>
            </div>
          
          {/* <div
            id="dropdown-cta"
            className="p-4 mt-6 rounded-lg bg-blue-50 dark:bg-blue-900"
            role="alert"
          >
            <div className="flex items-center mb-3">
              <span className="bg-orange-100 text-orange-800 text-sm font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-orange-200 dark:text-orange-900">
                Beta
              </span>
              <button
                type="button"
                className="ml-auto -mx-1.5 -my-1.5 bg-blue-50 text-blue-900 rounded-lg focus:ring-2 focus:ring-blue-400 p-1 hover:bg-blue-200 inline-flex h-6 w-6 dark:bg-blue-900 dark:text-blue-400 dark:hover:bg-blue-800"
                data-dismiss-target="#dropdown-cta"
                aria-label="Close"
              >
                <span className="sr-only">Close</span>
                <svg
                  aria-hidden="true"
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
            <p className="mb-3 text-sm text-blue-800 dark:text-blue-400">
              Preview the new Flowbite dashboard navigation! You can turn the
              new navigation off for a limited time in your profile.
            </p>
            <a
              className="text-sm text-blue-800 underline hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300"
              href="#"
            >
              Turn new navigation off
            </a>
          </div> */}
              <div className="mx-auto">
                 <p className="text-white font-bold mb-1">Need more Features?</p>
                 <Image src="/image/download.jpeg" alt="" width={250} height={250} className="p-5" />
                  <button className="mt-1 bg-green-500 hover:bg-blue-700 w-full text-white font-bold py-2 px-4 border border-blue-700 rounded">
                          Button
                  </button>
              </div>
        
      </div>
        
      </aside>
    </div>
  );
};

export default AdminDashboard;

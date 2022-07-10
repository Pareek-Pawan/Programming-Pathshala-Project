import React from "react";
import hrclogo from "../assets/hrc_logo.png";
const Projects = () => {
  return (
    <>
      <div className="lg:p-10 p-1">
        <div className="flex lg:text-[5rem] md:text-[2rem] text-[2rem]">
          <p className="text-heroArrow ">&lt;</p>
          <p className="text-paleWhite ">Projects</p>
          <p className="text-heroArrow">/&gt;</p>
        </div>
        <div className="p-5 md:px-28 ">
          <ol className="relative border-l border-gray-200 dark:border-gray-700 md:text-left">
            {/* Broadridge */}
            {/* <li className="mb-10 ml-4 rounded-md">
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                Jun 2022 - Jun 2023
              </time>
              <h3 className="text-lg md:text-xl font-bold text-paleWhite dark:text-white">
                SDE Intern
              </h3>
              <h2 className="text-sm md:text-lg font-semibold  dark:text-white flex justify-center py-1">
                <img src={brlogo} className="h-5 md:h-8 mr-1" />
                <p className="md:h-8 flex items-center">
                  <p className="text-sky-700">Broadridge</p>
                </p>
              </h2>
              <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                Get access to over 20+ pages including a dashboard layout,
                charts, kanban board, calendar, and pre-order E-commerce &
                Marketing pages.
              </p>
            </li> */}

            {/* HighRadius */}
            <li className="mb-10 ml-4 rounded-md ">
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>

              <h3 className="text-lg md:text-xl font-bold text-paleWhite dark:text-white cursor-pointer hover:text-purple-700">
                <a
                  className="flex md:justify-start justify-center"
                  href="https://github.com/VickeyMandal/AI-Enabled-FinTech-B2B-Invoice-Management"
                >
                  AI-ENABLED FINTECH B2B INVOICE MANAGEMENT
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 ml-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </h3>
              <div className="md:grid md:grid-cols-2 flex flex-col-reverse mt-2">
                <div className="">
                  <h2 className="text-sm md:text-lg font-semibold  dark:text-white flex justify-center md:justify-start py-1">
                    <p className="text-sky-500 mt-3">
                      ML, Java, ReactJs, NodeJs, MySql
                    </p>
                  </h2>

                  <p className="mb-4 mt-4 text-base  font-normal text-gray-500 dark:text-gray-400">
                    <ol>
                      <li>
                        • Built a Full Stack AI-Enabled B2B Cloud Application.
                      </li>
                      <li>
                        • Created minimalist UI using HTML, CSS, MUI, ReactJs.
                      </li>
                      <li>
                        • Wrote Java Backend Servlets and integrated with MySQL
                        using JDBC.
                      </li>
                      <li>
                        • Developed Regression Model using Python to predict
                        payment dates.
                      </li>
                    </ol>
                  </p>
                  <div className="text-base h-9 font-normal text-gray-500 dark:text-gray-400 flex items-center justify-center md:justify-start">
                    <p>Project is done under : </p>
                    <h2 className=" ml-2 text-sm md:text-lg font-semibold  dark:text-white flex justify-center md:justify-start py-1 opacity-60">
                      <img src={hrclogo} className="h-6 md:h-9 mr-1" />
                      <p className="md:h-9 flex items-center">
                        <p className="text-orange-400">High</p>
                        <p className="text-lime-500">rad</p>
                        <p className="text-sky-300">ius</p>
                      </p>
                    </h2>
                  </div>
                </div>
                <div className="p-3 mt-4">
                  <img
                    className="rounded-sm md:ml-5"
                    src="https://user-images.githubusercontent.com/63285005/164077877-e8c18b1a-83e5-4056-9cb9-803992653603.png"
                  />
                </div>
              </div>
            </li>

            <li className="mb-10 ml-4 rounded-md ">
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>

              <h3 className="text-lg md:text-xl font-bold text-paleWhite dark:text-white cursor-pointer hover:text-purple-700 ">
                <a
                  href="https://sql-editor-azure.vercel.app/"
                  className="flex md:justify-start justify-center"
                >
                  SQL-EDITOR
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 ml-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </h3>
              <div className="md:grid md:grid-cols-2 flex flex-col-reverse mt-2">
                <div className="">
                  <h2 className="text-sm md:text-lg font-semibold  dark:text-white flex justify-center md:justify-start py-1">
                    <p className="text-sky-500 mt-3">ReactJs, TailWindCSS</p>
                  </h2>

                  <p className="mb-4 mt-4 text-base  font-normal text-gray-500 dark:text-gray-400">
                    <ol>
                      <li>
                        • Users can get data and search/sort/navigate to
                        different page
                      </li>
                      <li>
                        • Users can download the data in CSV and JSON format in
                        just one click.
                      </li>
                      <li>
                        • Users can see query runtime in milliseconds(ms).
                      </li>
                      <li>
                        • Page Load time of this website on desktop is in the
                        range of 0.4 s to 0.6s.
                      </li>
                    </ol>
                  </p>
                  
                </div>
                <div className="p-3 mt-4">
                  <img
                    className="rounded-sm md:ml-5 "
                    src="https://user-images.githubusercontent.com/63285005/167256497-52e2285c-a8ce-43dc-aa27-d115a552ac51.jpg"
                  />
                </div>
              </div>
            </li>
          </ol>
        </div>
      </div>
    </>
  );
};

export default Projects;

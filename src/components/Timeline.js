import React from "react";
import lpulogo from "../assets/lpu_logo.png";
import keilogo from "../assets/kei_logo.png";
import hrclogo from "../assets/hrc_logo.png";
import brlogo from "../assets//br_logo.png";
import boat from "../assets/boat.gif"
import { FaUniversity, FaLaptopCode } from "react-icons/fa"
const Timeline2 = () => {
  return (
    <>
      <div className="lg:p-12 p-1 -mt-72 md:-mt-10">
        <div className="flex lg:text-[5rem] md:text-[2rem] text-[2rem]">
          <p className="text-heroArrow ">&lt;</p>
          <p className="text-paleWhite ">Timeline</p>
          <p className="text-heroArrow">/&gt;</p>
        </div>
        <div className="p-5 md:px-28 ">
          <ol className="relative border-l border-gray-200 dark:border-gray-700 md:text-left">
            {/* Broadridge */}
            <li className="mb-10 ml-4 rounded-md">
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                Jun 2022 - Present | Hyderabad, In
              </time>
              <h3 className="text-lg md:text-xl font-bold text-paleWhite dark:text-white flex justify-center  items-center md:justify-start md:mb-1">
                {/* <img src={developer} className="h-6 md:h-8 mr-1 " /> */}
                <FaLaptopCode className="h-6 md:h-9 mr-1 md:mr-2 -ml-1.5" />
                <p className="mt-1">Intern</p>
              </h3>
              <h2 className="text-sm md:text-lg font-semibold  dark:text-white flex justify-center md:justify-start py-1">
                <img src={brlogo} className="h-5 md:h-8 mr-1" />
                <p className="md:h-8 flex items-center">
                  <p className="text-sky-700">Broadridge</p>
                </p>
              </h2>
              <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400 flex justify-center md:justify-start items-center ">
                • Onboarding <img src={boat} className=" h-7 md:h-9 ml-1 mb-1 " />
              </p>
            </li>

            {/* HighRadius */}
            <li className="mb-10 ml-4 rounded-md ">
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                Jan 2022 - Apr 2022 |  Orissa, In
              </time>
              <h3 className="text-lg md:text-xl font-bold text-paleWhite dark:text-white flex justify-center  items-center md:justify-start md:mb-1">
                {/* <img src={developer} className="h-6 md:h-8 mr-1 " /> */}
                <FaLaptopCode className="h-6 md:h-9 mr-1 md:mr-2 -ml-1.5" />
                <p className="mt-1">SDE Intern</p>
              </h3>
              <h2 className="text-sm md:text-lg font-semibold  dark:text-white flex justify-center md:justify-start py-1">
                <img src={hrclogo} className="h-6 md:h-9 mr-1" />
                <p className="md:h-9 flex items-center">
                  <p className="text-orange-400">High</p>
                  <p className="text-lime-500">rad</p>
                  <p className="text-sky-300">ius</p>
                </p>
              </h2>
              <p className="mb-4 text-base  font-normal text-gray-500 dark:text-gray-400">
                <ol>
                  <li>
                    • Developed a Full Stack Application where UI was based on
                    ReactJs coupled with Material-UI and the backend was built
                    using JAVA and MySQL database.
                  </li>
                  <li>
                    • The Application enables analysts to keep track of payments
                    in a B2B world. The application uses ML model created using
                    Python to predict payment date of the customers.
                  </li>
                </ol>
              </p>
            </li>

            {/* Lovely Professional University */}
            <li className="mb-10 ml-4 rounded-md">
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                Jul 2020 - Jul 2023 |  Punjab, In
              </time>
              <h3 className="text-lg md:text-xl font-bold text-paleWhite dark:text-white flex justify-center md:justify-start items-center md:mb-1">
                {/* <img src={education} className="h-6 md:h-9 mr-1 -ml-1.5"  /> */}
                <FaUniversity className="h-6 md:h-9 mr-1 md:mr-2 -ml-1.5" />
                <p className="mt-1">BTech. in Computer Science</p>
              </h3>
              <h2 className="text-sm md:text-lg font-semibold text-orange-400 dark:text-white flex justify-center md:justify-start py-1">
                <img src={lpulogo} className="h-5 md:h-8 mr-1" />
                <p className="md:h-8 flex items-center">
                  Lovely Professional University
                </p>
              </h2>
              <p className="mb-4 text-base  font-normal text-gray-500 dark:text-gray-400">
                <ol>
                  <li>• GPA : 8.83</li>
                  <li>• Top 10%(Dean's List) in the batch of 2023.</li>
                </ol>
              </p>
            </li>

            {/* Kingston educational Institute */}
            <li className="mb-10 ml-4">
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                Jul 2017 - Jul 2020 | Kolkata, In
              </time>
              <h3 className="text-lg md:text-xl font-bold text-paleWhite dark:text-white flex justify-center md:justify-start items-center md:mb-1">
                {/* <img src={education} className="h-6 md:h-9 mr-1 -ml-1.5"  /> */}
                <FaUniversity className="h-6 md:h-9 mr-1 md:mr-2 -ml-1.5" />

                <p className="mt-1">Diploma in Computer Science</p>
              </h3>
              <h2 className="text-sm md:text-lg font-semibold text-yellow-500 dark:text-white flex justify-center md:justify-start py-1">
                <img src={keilogo} className="h-6 md:h-9 mr-1" />
                <p className="md:h-9 flex items-center">
                  Kingston Educational Institute
                </p>
              </h2>
              <p className="mb-4 text-base  font-normal text-gray-500 dark:text-gray-400">
                <ol>
                  <li>• GPA : 8.7</li>
                  <li>• Rank #1 out of 60.</li>
                  <li>
                    • Selected as one of the First member for the placement cell
                    by the Dean.
                  </li>
                </ol>
              </p>
            </li>
          </ol>
        </div>
      </div>
    </>
  );
};

export default Timeline2;

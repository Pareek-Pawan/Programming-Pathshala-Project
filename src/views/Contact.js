import React from "react";
import contact from "../assets/contact.svg";

const Contact2 = () => {
  return (
    <>
      <div className="h-2/3 md:absolute md:top-1/2 md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 md:w-2/3  md:m-auto bg-white rounded-lg md:mt-0 drop-shadow-2xl m-2 ">
        <div className="bg-paleBlack h-6 rounded-t-lg border-1 border-paleBlack flex items-center">
          <div className="flex space-x-1 ml-3">
            <div className="rounded-full bg-red-500 h-3 w-3"></div>
            <div className="rounded-full bg-orange-500 h-3 w-3"></div>
            <div className="rounded-full bg-green-500 h-3 w-3"></div>
          </div>
        </div>
        <div className="container h-[94%] flex items-center">
          <div className="grid h-full w-full grid-cols-1 md:grid-cols-3  md:px-5 py-3 justify-center items-center ">
            <div className="col-span-1 flex justify-center items-center h-full ">
              <img src={contact} className="h-44 md:h-4/5" />
            </div>
            <div className="container h-full col-span-2 flex flex-col p-1 justify-evenly ">
              <div className="grid grid-cols-1 md:grid-cols-2 pt-1 ">
                <input
                  className="col-span-1 rounded-md w-auto h-10 p-3 m-2 text-gray-400 bg-gray-200 drop-shadow-sm"
                  defaultValue="Name"
                ></input>
                <input
                  className="col-span-1 rounded-md w-auto h-10 p-3 m-2 text-gray-400 bg-gray-200 drop-shadow-sm"
                  defaultValue="Phone Number"
                ></input>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 pt-1">
                <input
                  className="col-span-3 rounded-md w-auto h-10 p-3 m-2 text-gray-400 bg-gray-200 drop-shadow-sm"
                  defaultValue="Email"
                ></input>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 pt-1 justify-start">
                <textarea
                  className="col-span-3 rounded-md w-auto h-[100%] p-3 m-2 text-gray-400 bg-gray-200 flex justify-start drop-shadow-sm"
                  defaultValue="Message"
                ></textarea>
              </div>
              <button className="h-10 bg-paleBlack text-white grid w-auto ml-2 mt-6 mr-2 rounded-md items-center font-bold">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact2;

import React from "react";
import { Link } from "react-router-dom";
function Homelogin() {
  return (
    <>
      <div className="w-screen flex h-screen bg-slate-200 items-center justify-center max-sm:items-start">
        <div className="w-2/3 h-3/4 ">
          <div className="flex flex-wrap">
            <div className="flex-col text-left mr-14">
              <div className="text-blue-600 text-6xl font-bold mb-3 mt-28 max-sm:text-5xl  max-sm:text-center">
                facebook
              </div>
              <div className="text-3xl max-sm:text-xs ">
                Facebook helps you connect and share
                <br /> with the people in your life.
              </div>
            </div>
            <div className="flex-col text-left w-96 m-1 rounded-lg mt-14 pb-8 bg-white max-sm:w-80">
              <div className="m-3">
                <input
                  type="text"
                  id="first_name"
                  className="  h-12 w-full p-4 rounded-lg bg-gray-50 border-2 border-gray-400 text-gray-900 text-sm  focus:border-blue-500  focus:outline-none max-sm:h-10 "
                  placeholder="Email address or phone number"
                  required
                />
              </div>
              <div className="m-3">
                <input
                  type="text"
                  id="first_name"
                  className="  h-12 w-full p-4 rounded-lg bg-gray-50 border-2 border-gray-400 text-gray-900 text-sm  focus:border-blue-500  focus:outline-none max-sm:h-10 "
                  placeholder="password"
                  required
                />
              </div>
              <br />
              <div className="mr-3 ml-3 ">
                <Link
                  className=" bg-blue-600 text-white p-2 flex justify-center rounded-lg h-12 text-xl font-bold 
                                transition duration-200 ease-in-out hover:bg-blue-700 transform hover:hover:scale-105
                                max-sm:h-10  max-sm:text-sm"
                  to="/fetch"
                >
                  Fetched data
                </Link>
                <center>
                  <div className="text-black  textss-sm max-sm:text-sm ">
                    forgot password?
                  </div>
                </center>
                <button className="bg-green-600   mt-10    text-white w-full rounded-lg h-12 text-lg font-bold max-sm:text-sm  max-sm:p-2 max-sm:h-10  ">
                  Create new account
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Homelogin;

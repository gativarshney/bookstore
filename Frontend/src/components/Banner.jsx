import React from "react";
import banner from "../../public/Banner.png"

const Banner = () => {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10">
        <div className="order-2 md:order-1 w-full md:w-1/2 mt-12 ">
          <div className="md:mt-18 space-y-12">
            <h1 className="text-3xl md:text-4xl font-bold">
              Hello, Welcome here to learn something{" "}
              <span className="text-pink-400">new everyday..!</span>
            </h1>
            <p className="md:text-xl">
              Every day is an opportunity to explore, grow, and master something
              new. Dive in, stay focused, and let's level up—one small step at a
              time.
            </p>
            <label className="input validator md:w-1/2 w-full border border-gray-300 dark:border-gray-600 rounded-md focus-within:outline-none">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </g>
              </svg>
              <input
                type="email"
                placeholder="Enter Email for Subscribing"
                className="outline-none focus:outline-none px-2 py-1 bg-transparent"
                required
              />
            </label>
          </div>
          <button className="btn btn-secondary mt-10">Submit</button>
        </div>
        <div className="order-1 w-full md:w-1/2 flex items-center justify-center">
            <img src={banner} className="mt-5 w-80 md:w-116 "  alt="bannerImage" />
        </div>
      </div>
    </>
  );
};

export default Banner;

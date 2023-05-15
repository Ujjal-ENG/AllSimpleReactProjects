/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable comma-dangle */
/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
/* eslint-disable react/jsx-indent */
/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable indent */

import React from "react";

function Home() {
  return (
    <div>
      <div className="w-full  mx-auto -mt-8">
        <div className="flex flex-wrap w-full h-screen text-white relative mb-4">
          <img
            alt="gallery"
            className="w-full object-cover h-full object-center block opacity-70 absolute inset-0"
            src="https://images.pexels.com/photos/1144687/pexels-photo-1144687.jpeg?auto=compress&cs=tinysrgb&w=600"
          />
          <div className=" relative z-10 w-full">
            <h2 className="text-2xl text-gray-900 font-medium title-font mb-2">
              Shooting Stars
            </h2>
            <p className="leading-relaxed">
              Skateboard +1 mustache fixie paleo lumbersexual.
            </p>
            <a className="mt-3 text-indigo-500 inline-flex items-center">
              Learn More
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

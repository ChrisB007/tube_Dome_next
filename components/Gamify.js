import React from "react";

function Gamify() {
  return (
    <div className="relative bg-gradient-to-r from-gray-900 to-black">
      <div className="mx-auto max-w-7xl w-full pt-16 pb-20 text-center lg:py-48 lg:text-left">
        <div className="px-4 lg:w-1/2 sm:px-8 xl:pr-16">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
            <span className="block xl:inline text-white">We gamify Sport,</span>{" "}
            <span className="hero-text block text-red-600 xl:inline">
              Why not Movies & TV?
            </span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-lg text-gray-500 sm:text-lg md:mt-5 md:max-w-3xl">
            Choose a show | Boost to Compete | Rack up points (& Win Prizes)
          </p>
          <p className="mt-3 max-w-md mx-auto text-sm text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
            Point-based interactive database for film & TV
          </p>
          <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
            <div className="rounsded-md shadow">
              <a
                href="me.com"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 md:py-4 md:text-lg md:px-10"
              >
                How It works
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gamify;

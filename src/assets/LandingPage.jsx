import React from "react";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className="main bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto">
        <div className="intro-text text-center py-20">
          <div>
            <h1 className="text-5xl md:text-7xl font-bold">
              Welcome to <span className="bg-yellow-300">Notes</span>
            </h1>

            <p className="text-lg md:text-2xl m-4 text-gray-700 dark:text-gray-400">
              A <span className="bg-green-500 text-white">Safe</span> place for
              all your notes.
            </p>
          </div>
          <div className="flex justify-center mt-10">
            <div className="space-x-4">
              <a
                href="/mynotes"
                className="text-white bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg text-lg font-medium"
              >
                My Notes
              </a>
              {/* <a
                href="/register"
                className="text-blue-500 border border-blue-500 hover:text-white hover:bg-blue-500 px-6 py-3 rounded-lg text-lg font-medium"
              >
                Register
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;

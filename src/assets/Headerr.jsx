import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <div>
      <header>
        <nav
          className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 "
          style={{ backgroundColor: "#007bff" }}
        >
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <a href="/" className="flex items-center">
              <img
                src="https://flowbite.com/docs/images/logo.svg"
                className="mr-3 h-6 sm:h-9"
                alt="Flowbite Logo"
              />
              <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                Notes
              </span>
            </a>
            <div className="flex items-center lg:order-2">
              <a
                className="inline-block bg-gray-800 dark:bg-white text-white dark:text-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2"
                href="/mynotes"
              >
                My notes
              </a>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;

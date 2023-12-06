import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div>
      <footer className="text-center footerr">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span className="text-sm text-gray-500 sm:text-center mx-auto dark:text-gray-700">
            © 2023{" "}
            <a href="/" className="hover:underline">
              Notes™
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

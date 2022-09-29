import React from "react";
import logo from "../../images/logo.png";
import "./Header.css";
export const Header = () => {
  return (
    <header className="bg-[#1d1e21]  font-normal sm:h-32 flex items-center justify-between px-1">
      <img
        className="w-4/5 sm:w-2/4 lg:w-fit mx-auto sm:mx-0"
        src={logo}
        alt=""
      />
      <div className="hidden text-base custom-font sm:flex gap-5 mx-5">
        <a
          className="text-white transition ease duration-200 hover:text-[#ff5e19]"
          href="/home"
        >
          Home
        </a>
        <a
          className="text-white transition ease duration-200 hover:text-[#ff5e19]"
          href="/user-registration"
        >
          User Registration
        </a>
        <a
          className="text-white transition ease duration-200 hover:text-[#ff5e19]"
          href="/services"
        >
          Services
        </a>
        <a
          className="text-white transition ease duration-200 hover:text-[#ff5e19]"
          href="/contact"
        >
          Contact Us
        </a>
      </div>
    </header>
  );
};

import React from "react";
import logo from "../../images/logo.png";
import "./Header.css";
export const Header = () => {
  return (
    <header className="bg-[#1d1e21] h-32 flex items-center justify-between">
      <img src={logo} alt="" />
      <div className="text-2xl font-semibold flex gap-5 mx-5">
        <a className="text-white hover:text-[#ff5e19]" href="/home">
          Home
        </a>
        <a
          className="text-white hover:text-[#ff5e19]"
          href="/user-registration"
        >
          User Registration
        </a>
        <a className="text-white hover:text-[#ff5e19]" href="/services">
          Services
        </a>
        <a className="text-white hover:text-[#ff5e19]" href="/contact">
          Contact Us
        </a>
      </div>
    </header>
  );
};

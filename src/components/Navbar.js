import React from "react";
import { Link } from "react-router-dom";
import Logo from "../img/Logo.svg";

const Navbar = ({ toggle }) => {
  return (
    <nav className="flex justify-between items-center p-10 ">
      <Link to="/" className="text-base flex " role="navigation">
        <div className="logo pr-4 flex-none">
          <img src={Logo} className="h-16 w-16" />
        </div>
        <div>
          <h1 className="text-4xl font-semibold efficiently-blue text-left">
            Efficiently
          </h1>
          <h2 className="font-thin text-sm">Upgrade Your Efficiency.</h2>
        </div>
      </Link>
      <div className="cursor-pointer hidden" onClick={toggle}>
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </div>
      <div className="invisible sm:visible">
        <a
          className="font-bold rounded-full p-4 bg-blue-400 shadow-sm hover:shadow-lg text-white"
          href="https://twitter.com/doefficiently"
        >
          @doefficiently
        </a>
      </div>
    </nav>
  );
};

export default Navbar;

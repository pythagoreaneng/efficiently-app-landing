import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ toggle }) => {
  return (
    <nav className="flex justify-between items-center relative p-10">
      <Link to="/" className="text-base " role="navigation">
        <div>
          <h1 className="text-4xl font-semibold text-blue-400 ">Efficiently</h1>
          <h2 className="font-thin">Upgrade Your Efficiency.</h2>
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

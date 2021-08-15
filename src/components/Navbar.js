import React from "react";
import { Link } from "react-router-dom";
import Logo from "../img/Logo.svg";
import Twitter from "../img/Twitter.svg";

const Navbar = () => {
  return (
    <div className="flex items-center justify-center sm:justify-between m-5">
      <Link to="/" className="flex justify-center">
        <img src={Logo} className="h-10 w-10 sm:h-16 sm:w-16" />

        <div className="flex flex-col justify-center items-center">
          <div className="pl-2 flex flex-col">
            <h1 className="efficiently-blue font-semibold text-base sm:text-4xl">
              Efficiently
            </h1>
            <h2 className="font-thin text-xs sm:text-base">
              Upgrade Your Efficiency.
            </h2>
          </div>
        </div>
      </Link>
      <a href="https://twitter.com/doefficiently" className="hidden sm:flex">
        <img className="h-7 w-auto" src={Twitter} />
      </a>
    </div>
  );
};

export default Navbar;

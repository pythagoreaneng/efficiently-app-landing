import React from "react";
import { Link } from "react-router-dom";
import Logo from "../img/Logo.svg";
import Twitter from "../img/Twitter.svg";

const Navbar = () => {
  return (
    <>
      <div className="flex items-center justify-between p-10 gap-16 m-3">
        <Link to="/" className="flex justify-center">
          <img src={Logo} className="h-16 w-16" />

          <div className="pl-2">
            <h1 className="efficiently-blue font-semibold text-4xl ">
              Efficiently
            </h1>
            <h2 className="font-thin text-sm">Upgrade Your Efficiency.</h2>
          </div>
        </Link>
        <a href="https://twitter.com/doefficiently">
          <img className="h-7 w-auto" src={Twitter} />
        </a>
      </div>
    </>
  );
};

export default Navbar;

import React from "react";
import Twitter from "../img/Twitter.svg";

function Footer() {
  return (
    <div className="flex justify-around items-center h-20 text-black">
      <p>&copy; 2021 Pythagorean Software</p>
      <a href="https://twitter.com/doefficiently" className="sm:hidden">
        <img className="h-7 w-auto" alt="twitter-icon" src={Twitter} />
      </a>
    </div>
  );
}

export default Footer;

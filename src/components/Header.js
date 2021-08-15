import React from "react";
import Mockup from "../img/Mockup.svg";

export default function Header() {
  return (
    <div className="md:flex md:flex-rows-2 h-full md:items-center my-20">
      <div className="flex flex-1 justify-center">
        <div className="flex flex-col md:items-start">
          <p className="flex justify-center font-bold text-4xl sm:text-6xl lg:text-7xl ">
            Do&nbsp;
            <span className="efficiently-blue">Efficiently</span>
          </p>
          <p className="flex justify-center md:justify-start text-gray-500 pl-2">
            All-in-One Productivity App
          </p>
          <div className="flex justify-center md:justify-start">
            <button className="bg-efficiently-blue rounded-3xl font-medium text-white p-3 my-8">
              <a href="#newsletter">Join the Waitlist</a>
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-1 w-full justify-center">
        <img className="w-72" src={Mockup} />
      </div>
    </div>
  );
}

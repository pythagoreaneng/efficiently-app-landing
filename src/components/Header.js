import React from "react";
import Mockup from "../img/Mockup.svg";

export default function Header() {
  return (
    <>
      <div className="md:flex ">
        <h1 className="m-auto">
          <div className="grid grid-col">
            <p className="flex justify-center font-bold text-4xl sm:text-7xl lg:text-8xl ">
              Do &nbsp;
              <span className="efficiently-blue">Efficiently</span>
            </p>
            <p className="flex justify-center md:justify-start text-gray-500 pl-2">
              All-in-One Productivity App
            </p>
          </div>

          <div className="flex justify-center md:justify-start">
            <button className="bg-efficiently-blue rounded-3xl font-medium text-white p-3 my-8">
              <a href="#newsletter">Early Access</a>
            </button>
          </div>
        </h1>
        <div className="flex justify-center md:m-auto">
          <img className="w-72" src={Mockup} />
        </div>
      </div>
    </>
  );
}

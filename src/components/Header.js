import React from "react";
import Mockup from "../img/Mockup.svg";

export default function Header() {
  return (
    <div className="flex flex-col justify-center items-center h-96 ">
      <p className="flex justify-center font-bold text-4xl sm:text-6xl lg:text-7xl ">
        Do&nbsp;
        <span className="efficiently-blue">Efficiently</span>
      </p>
      <p className="flex justify-center  text-gray-500 pl-2">
        All-in-One Productivity App
      </p>
      <div className="flex justify-center gap-3">
        <button className="bg-efficiently-blue rounded-3xl font-medium text-white p-3 my-8 hover:opacity-90">
          <a href="#newsletter">Request Beta Access</a>
        </button>
        <button className="bg-gray-300 rounded-3xl font-medium text-white p-3 my-8 hover:opacity-90">
          <a href="https://github.com/pythagoreaneng/efficiently-app-web">
            See on GitHub
          </a>
        </button>
      </div>

      {/* <div className="flex flex-1 w-full justify-center">
        <img className="w-72" alt="mockup" src={Mockup} />
      </div> */}
    </div>
  );
}

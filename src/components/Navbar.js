import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ toggle }) => {
  return (
    <nav className="flex justify-between items-center p-10">
      <Link to="/" className="text-base flex" role="navigation">
        <div className="logo pr-4">
          <svg
            width="65"
            height="65"
            viewBox="0 0 33 33"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="0.15"
              y="0.15"
              width="32.1438"
              height="32.1438"
              rx="4.48483"
              fill="white"
              stroke="black"
              stroke-width="0.3"
            />
            <path
              d="M21.3053 12.307L19.9983 11L14.1213 16.877L15.4284 18.184L21.3053 12.307ZM25.2357 11L15.4284 20.8073L11.5537 16.9419L10.2466 18.2489L15.4284 23.4306L26.552 12.307L25.2357 11ZM5 18.2489L10.1817 23.4306L11.4888 22.1236L6.31629 16.9419L5 18.2489Z"
              fill="#46BCFF"
            />
          </svg>
        </div>
        <div>
          <h1 className="text-4xl font-semibold text-blue-400 text-left">Efficiently</h1>
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

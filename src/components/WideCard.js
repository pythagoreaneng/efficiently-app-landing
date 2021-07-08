import React from "react";

const WideCard = (props) => {
  const content = props.content;
  return (
    <>
      <div
        className="px-8 py-16 rounded-xl shadow-lg text-white h-full"
        style={props.style}
      >
        <div className="text-3xl sm:text-5xl font-bold">
          <span>{props.title}</span>{" "}
          <span className="efficiently-blue">Efficiently</span>
        </div>

        <div className="grid">
          <div className="flex h-72 w-auto items-center justify-center">
            {props.content}
          </div>

          <div className="flex justify-center text-gray-500">{props.body}</div>
        </div>
      </div>
    </>
  );
};

export default WideCard;

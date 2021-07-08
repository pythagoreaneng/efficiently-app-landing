import React from "react";

const WideCard = (props) => {
  const image = props.image;
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

        <div className="flex h-72 w-auto items-center justify-center">
          {props.content}
        </div>

        <div className="text-gray-500 h-full text-center">
          <p>{props.body}</p>
        </div>
      </div>
    </>
  );
};

export default WideCard;

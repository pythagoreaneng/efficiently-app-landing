import React from "react";

const Card = (props) => {
  const image = props.image;
  const content = props.content;
  return (
    <>
      <div
        className="px-8 pt-16 pb-24 rounded-xl shadow-lg text-white h-full"
        style={props.style}
      >
        <div className="text-3xl sm:text-5xl font-bold">
          <h3>
            <span>{props.title}</span>{" "}
            <span className="efficiently-blue">Efficiently</span>
          </h3>
        </div>

        <div className="grid xl:grid-cols-2 h-full ">
          <div className="text-gray-500 pt-8 pl-4">
            <p>{props.body}</p>
          </div>

          <div className=" flex items-center justify-center">
            {props.content}
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;

import React from "react";

const Card = (props) => {
  const image = props.image;
  const content = props.content;
  return (
    <div
      className="px-8 py-16 rounded-xl shadow-2xl text-white h-full"
      style={props.style}
    >
      <div className="p-2 text-3xl sm:text-5xl font-bold">
        <h3>
          <span>{props.title}</span>{" "}
          <span className="efficiently-blue">Efficiently</span>
        </h3>
      </div>

      <div className="grid xl:grid-cols-2 h-full">
        {/* left container */}

        <div className="px-3 py-20 text-gray-600 h-full">
          <p>{props.body}</p>
        </div>

        {/* right container */}
        <div className="">
          <div className="flex items-center justify-center py-8 h-full">
            {props.content}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

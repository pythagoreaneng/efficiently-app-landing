import React from "react";

const Card = (props) => {
  const image = props.image;
  const content = props.content;
  return (
    <div
      className="px-10 py-20 rounded-xl shadow-2xl text-white h-full"
      style={props.style}
    >
      <div className="p-2 text-2xl md:text-4xl font-bold">
        <h3>
          <span className="text-white">{props.title}</span>{" "}
          <span className="text-blue-400">Efficiently</span>
        </h3>
      </div>

      <div className="sm:grid grid-cols-2">
        {/* left container */}
        <div className="">
          <div className="px-3 py-20 text-gray-600">
            <p>{props.body}</p>
          </div>
        </div>

        {/* right container */}
        <div className="">
          {content && (
            <div className="flex justify-center py-20">{props.content}</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;

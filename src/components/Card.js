import React from "react";

const Card = (props) => {
  const image = props.image;
  const content = props.content;
  return (
    <div
      className="px-8 py-10 rounded-xl shadow-2xl text-white h-full"
      style={props.style}
    >
      <div className="p-2 text-3xl sm:text-5xl font-bold">
        <h3>
          <span>{props.title}</span>{" "}
          <span className="efficiently-blue">Efficiently</span>
        </h3>
      </div>

      <div className="grid xl:grid-cols-2 ">
        {/* left container */}

        <div className="px-3 py-20 text-gray-600">
          <p>{props.body}</p>
        </div>

        {/* right container */}
        <div className="">
          {content && (
            <div className="flex justify-center py-8">{props.content}</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;

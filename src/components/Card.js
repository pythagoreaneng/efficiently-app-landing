import React from "react";

const Card = (props) => {
  const image = props.imageUrl;
  const rightContent = props.rightContent;
  return (
    <div
      className="p-10 rounded-xl shadow-2xl bg-gray-100 text-white"
      style={props.style}
    >
      <div className="p-2 text-3xl md:text-5xl font-bold">
        <h3>
          {props.title} <span className="text-blue-400">Efficiently</span>
        </h3>
      </div>

      <div className="sm:grid grid-cols-2">
        {/* left container */}
        <div className="">
          <div className="p-5 text-gray-600 font-normal">
            <p>{props.body}</p>
          </div>
        </div>

        {/* right container */}
        <div className="">
          {image && (
            <div className="image-container">
              <img src={props.imageUrl} alt="" />
            </div>
          )}
          {rightContent && (
            <div className="image-container">{props.rightContent}</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;

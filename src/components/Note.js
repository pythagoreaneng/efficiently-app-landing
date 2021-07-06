import React from "react";

const Note = (props) => {
  return (
    <div
      className="px-10 py-10 rounded-xl shadow-2xl text-white h-full"
      style={props.style}
    >
      <div className="p-2 text-gray-500">{props.body}</div>
    </div>
  );
};

export default Note;

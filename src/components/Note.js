import React from "react";

const Note = (props) => {
  return (
    <div
      className="p-6 shadow-lg text-white h-64 w-64"
      style={{ backgroundColor: "#FFFB9E" }}
    >
      <div className="p-2 text-gray-500">{props.body}</div>
    </div>
  );
};

export default Note;

import React from "react";
import { useState } from "react";
import "../App.css";

const Dot = (props) => {
  const [dotColor, setDotColor] = useState(props.color);
  const handleDotColor = (dotColor) => {
    setDotColor(dotColor);
  };

  return (
    <>
      <div className="">
        <button
          className="rounded-full h-12 w-12 flex items-center justify-center ring-4 ring-pink-300 ring-color"
          style={{ backgroundColor: dotColor }}
          onClick={props.onClick}
        />
      </div>
    </>
  );
};

export default Dot;

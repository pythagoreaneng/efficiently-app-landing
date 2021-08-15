import React from "react";
import { useState } from "react";

const Dot = (props) => {
  const [dotColor, setDotColor] = useState(props.color);

  return (
    <button
      className="rounded-full h-12 w-12 flex items-center justify-center ring-4 ring-pink-300 ring-color"
      style={{ backgroundColor: dotColor }}
      onClick={props.onClick}
    />
  );
};

export default Dot;

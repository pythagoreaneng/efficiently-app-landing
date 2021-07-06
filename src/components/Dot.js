import React from "react";

const Dot = (props) => {
  return (
    <>
      <button
        className="rounded-full h-12 w-12 flex items-center justify-center ring-4"
        style={{ backgroundColor: props.color }}
      />
    </>
  );
};

export default Dot;

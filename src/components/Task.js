import React from "react";
import { useState } from "react";

const Task = (props) => {
  const [dotColor, setDotColor] = useState(props.color);
  const handleDotColor = (dotColor) => {
    setDotColor(dotColor);
  };

  return (
    <>
      <div className="flex w-full ">
        <div
          className="flex flex-auto rounded-lg h-12  w-auto items-center  "
          style={{ backgroundColor: "#46BCFF" }}
          onClick={props.onClick}
        >
          <div className="flex h-full w-full relative ">
            <input
              type="checkbox"
              class="form-checkbox text-indigo-600 my-auto mx-1  "
            />
            <div className="grid grid-rows-3 ">
              <div className="text-xs font-bold"> {props.due}</div>
              <div className="text-sm pr-10"> {props.body}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Task;

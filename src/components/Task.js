import React from "react";
import { useState } from "react";

const Task = (props) => {
  const [checked, setChecked] = useState(false);
  const handleClick = () => setChecked(!checked);

  return (
    <>
      <div className="flex w-full shadow-2xl">
        <div
          className="flex flex-auto rounded-lg h-12  w-auto items-center  "
          style={{ backgroundColor: "#46BCFF" }}
        >
          <div className="flex h-full w-full relative ">
            <input
              type="checkbox"
              onClick={handleClick}
              checked={checked}
              class="form-checkbox text-indigo-600 my-auto mx-2"
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

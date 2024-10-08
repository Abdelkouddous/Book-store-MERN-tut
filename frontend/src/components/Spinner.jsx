import React from "react";

export const Spinner = () => {
  return (
    <div className="flex justify-center m-auto">
      <div
        className="animate-ping w-2 h-2 m-auto
   bg-sky-800 rounded-full"
      ></div>
      {/* <div
        className="animate-ping w-2 h-2 m-auto
     bg-sky-800 rounded-full"
      ></div>
      <div
        className="animate-ping w-2 h-2 m-auto
     bg-sky-800 rounded-full"
      ></div> */}
    </div>
  );
};

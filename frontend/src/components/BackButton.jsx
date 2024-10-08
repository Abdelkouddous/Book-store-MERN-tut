import React from "react";
import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";

export const BackButton = ({ destination = "/" }) => {
  return (
    <div className="flex">
      <Link
        to={destination}
        className="hover:opacity-90 flex items-center gap-2 bg-sky-800 text-blue-50 px-4 py-1 rounded-lg w-fit"
      >
        <BsArrowLeft size={24} className="text-2xl" />
        <span>Back</span>
      </Link>
    </div>
  );
};

export default BackButton;

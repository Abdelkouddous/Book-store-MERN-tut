import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineDelete } from "react-icons/md";
import { BiShow } from "react-icons/bi";
import { PiBookOpenTextLight } from "react-icons/pi";
import { BiUserCircle } from "react-icons/bi";
import { useState } from "react";
import BookModal from "./BookModal";

const BookSingleCard = ({ book }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="border-2 border-gray-600 rounded-lg px-4 py-2 m-2 relative hover:shadow-xl">
      <h2 className="absolute top-1 right-2 px-4 py-1 bg-sky-300 rounded-lg">
        {book.publishYear}
      </h2>
      <h4 className="my-2 text-gray-500">{book.id}</h4>
      <div className="flex justify-start items-center gap-x-2">
        <PiBookOpenTextLight className="text-sky-300 text-2xl"></PiBookOpenTextLight>
        <h2 className="my-1">{book.title}</h2>
      </div>
      <div className="flex justify-start items-center gap-x-2">
        <BiUserCircle className="text-sky-300 text-2xl" />
        <h2 className="my-1">{book.author}</h2>
      </div>
      <div className="flex justify-between items-center gap-x-2 mt-4 p-4">
        <BiShow
          className="text-3xl text-blue-900 hover:text-black cursor-pointer hover:scale-105"
          onClick={() => setShowModal(true)}
        />
        <Link to={`/books/details/${book._id}`}>
          <BsInfoCircle className="text-2xl text-green-900 hover:scale-105 hover:text-black"></BsInfoCircle>
        </Link>
        <Link to={`/books/edit/${book._id}`}>
          <AiOutlineEdit className="text-2xl text-blue-900 hover:scale-105 hover:text-black"></AiOutlineEdit>
        </Link>

        <Link to={`/books/delete/${book._id}`}>
          <MdOutlineDelete className="text-2xl text-sky-600 hover:scale-105 hover:text-black"></MdOutlineDelete>
        </Link>
      </div>
      {showModal && (
        <BookModal book={book} onClose={() => setShowModal(false)} />
      )}
    </div>
  );
};

export default BookSingleCard;

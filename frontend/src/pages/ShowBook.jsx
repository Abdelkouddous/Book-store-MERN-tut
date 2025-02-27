import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { BackButton } from "../components/BackButton";
import { AiOutlineLoading } from "react-icons/ai";
import { Spinner } from "../components/Spinner";

const ShowBook = () => {
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      // replace with your own API endpoint
      .get(`http://localhost:5000/books/${id}`)
      .then((response) => {
        setBook(response.data);
        console.log(response.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);
  return (
    <div className="p-4">
      <BackButton></BackButton>
      {console.log(book._id)}
      <h1 className="text-3xl my-4">ShowBook</h1>
      {loading ? (
        <Spinner></Spinner>
      ) : (
        <div className="flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4">
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Id : </span>
            <span> {book._id}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Author </span>
            <span> {book.author}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Publish Year </span>
            <span> {book.publishYear}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Create Time </span>
            <span>
              {/*  */}
              {new Date(book.createdAt).toString()}
            </span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Last update time</span>
            <span>
              {/*  */}
              {new Date(book.updatedAt).toString()}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};
export default ShowBook;

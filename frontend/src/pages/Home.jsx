import React, { useEffect, useState } from "react";
import axios from "axios";
import { Spinner } from "../components/Spinner";
import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";
import BackButton from "../components/BackButton";
import { BooksTable } from "../components/home/BooksTable";
import { BooksCard } from "../components/home/BooksCard";

const Home = () => {
  //u wanna have 2 states
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showType, setShowType] = useState("card");
  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:5000/books")
      .then((response) => {
        setBooks(response.data.data);
        console.log(response.data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="m-auto mx-2 my-3 p4 overflow-auto">
      <div className="flex justify-center items-center gap-x-4 m-2 space-x-1">
        <h1 className="text-xl m-1">Show list as </h1>
        <button
          onClick={() => setShowType("table")}
          className={`hover:scale-110 p-2 bg-sky-600 hover:-translate-y-1 hover:bg-sky-700 hover:shadow-sm px-4 py-1 rounded-lg text-blue-50 border border-gray-600 ${
            showType === "table" ? "bg-sky-900 text-white" : ""
          }`}
        >
          Table
        </button>
        <button
          onClick={() => setShowType("card")}
          className={`hover:scale-110 p-2 bg-sky-600 hover:bg-sky-700 hover:opacity-95 hover:-translate-y-1 hover:shadow-sm px-4 py-1 rounded-lg text-blue-50 border border-gray-600 ${
            showType === "card" ? "bg-sky-900 text-white" : ""
          }`}
        >
          Card
        </button>
      </div>
      <div className="flex justify-between items-center">
        <h1 className="text-3xl my-8">Books List </h1>
        <Link to="/books/create">
          <MdOutlineAddBox className="text-sky-950 text-4xl"></MdOutlineAddBox>
        </Link>
      </div>
      {/* {loading ? <Spinner /> : <BooksTable books={books}></BooksTable>} */}
      {loading ? (
        <Spinner />
      ) : showType === "table" ? (
        <BooksTable books={books}></BooksTable>
      ) : (
        <BooksCard books={books}></BooksCard>
      )}
    </div>
  );
};

export default Home;

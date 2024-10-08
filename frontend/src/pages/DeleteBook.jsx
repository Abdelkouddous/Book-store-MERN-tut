import React, { useState, useEffect } from "react";
import axios from "axios";
import BackButton from "../components/BackButton";
import { Spinner } from "../components/Spinner";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useSnackbar } from "notistack";
//================================================
const DeleteBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishYear, setPublishYear] = useState("");
  const [loading, setLoading] = useState(false);
  const [book, setBook] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  //getting the book informations
  useEffect(() => {
    setLoading(true);
    axios
      // replace with your own API endpoint
      .get(`http://localhost:5000/books/${id}`)
      .then((response) => {
        setBook(response.data.title);
        setTitle(response.data.title);
        setAuthor(response.data.author);
        setPublishYear(response.data.publishYear);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []); // if u dont add the [ ] it will loop infinitely
  //================================================================
  //editting the book infos
  const handleDeleteBook = () => {
    setLoading(true);
    axios
      .delete(`http://localhost:5000/books/${id}`)
      .then((response) => {
        setLoading(false);
        setBook(response.data.data);
        enqueueSnackbar(`Book ${book} deleted successfully`, {
          variant: response.data.data,
          // variant : 'success'
        });
        navigate("/");
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  };
  return (
    <div className="p-4 fixed inset-0 space-y-2 mr-2 m-auto">
      <BackButton></BackButton>

      {loading ? <Spinner></Spinner> : ""}
      <div className="flex flex-col border-2  rounded-xl max-w-[600px] p-4 mx-auto">
        <h1 className="text-2xl my-4">
          Are you sure you want to delete {book} ?
        </h1>
        <button
          className="p-2  m-4 hover:opacity-90  bg-sky-800 text-blue-50"
          onClick={handleDeleteBook}
        >
          Delete
        </button>
      </div>
    </div>
  );
};
export default DeleteBook;

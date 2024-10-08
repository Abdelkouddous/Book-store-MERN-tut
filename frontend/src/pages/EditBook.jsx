import React, { useState, useEffect } from "react";
import axios from "axios";
import BackButton from "../components/BackButton";
import { Spinner } from "../components/Spinner";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useSnackbar } from "notistack";
//============================================================================
const EditBook = () => {
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
  const handleEditBook = () => {
    setLoading(true);
    axios
      .put(`http://localhost:5000/books/${id}`, { title, author, publishYear })
      .then((response) => {
        setLoading(false);
        setBook(response.data.data);
        enqueueSnackbar(`Book  updated successfully`, {
          variant: "success",
          title,
        });
        navigate("/");
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  };
  return (
    <div className="p-4">
      <BackButton></BackButton>
      <h1 className="text-3xl my-4">
        Edit book {book}
        {console.log({ book })}
      </h1>
      {loading ? <Spinner></Spinner> : ""}
      <div className="flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto">
        <label className="text-xl mr-4 text-gray-500">Title</label>
        <input
          type="text"
          className="border-2 border-gray-500 px-4"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        ></input>
        <label className="text-xl mr-4 text-gray-500">Author</label>
        <input
          type="text"
          className="border-2 border-gray-500 px-4"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        ></input>
        <label className="text-xl mr-4 text-gray-500">Publish Year</label>
        <input
          type="text"
          className="border-2 border-gray-500 px-4"
          value={publishYear}
          onChange={(e) => setPublishYear(e.target.value)}
        ></input>
      </div>
      <button className="p-2 bg-sky-300 m-8" onClick={handleEditBook}>
        Save
      </button>
    </div>
  );
};
export default EditBook;

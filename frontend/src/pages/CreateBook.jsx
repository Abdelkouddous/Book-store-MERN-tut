import React, { useState } from "react";
import axios from "axios";
import BackButton from "../components/BackButton";
import { Spinner } from "../components/Spinner";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";

const CreateBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishYear, setPublishYear] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const handleSaveBook = () => {
    setLoading(true);
    axios
      .post("http://localhost:5000/books", { title, author, publishYear })
      .then((response) => {
        setLoading(false);
        enqueueSnackbar(`Book ${title} created successfully`, {
          variant: "success",
        });
        navigate("/");
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
        enqueueSnackbar("Error creating book", { variant: "error" });
      });
  };
  return (
    <div className="p-4">
      <BackButton></BackButton>
      <h1 className="text-3xl my-4">Create a new book</h1>
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
      <button className="p-2 bg-sky-300 m-8" onClick={handleSaveBook}>
        Save
      </button>
    </div>
  );
};
export default CreateBook;

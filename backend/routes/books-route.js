import express from "express";
import { Book } from "../models/book-model.js";
//================================================
//refractor node with express router module
const router = express.Router();
router.post("/", async (request, response) => {
  //fields requires
  try {
    if (
      !request.body.title ||
      !request.body.author ||
      !request.body.publishYear
    ) {
      return response.status(400).send({ message: "All fields are required" });
    }
    const newBook = {
      title: request.body.title,
      author: request.body.author,
      publishYear: request.body.publishYear,
    };
    const book = await Book.create(newBook);
    return response.status(201).send(book);
  } catch (err) {
    console.log(err);
    response.status(500).send({ message: err.message });
  }
});

router.get("/", async (request, response) => {
  try {
    const books = await Book.find();
    return response.status(201).send({ count: books.length, data: books });
  } catch (err) {
    console.log(err);
    response.status(500).send({ message: err.message });
  }
});

//getting one book by ID
router.get("/:id", async (request, response) => {
  try {
    const { id } = request.params;
    const book = await Book.findById(id);
    return response.status(201).json(book);
  } catch (err) {
    console.log(err);
    response.status(500).send({ message: err.message });
  }
});

//update a book by ID and update it
router.put("/:id", async (request, response) => {
  try {
    const { id } = request.params;
    if (
      !request.body.title ||
      !request.body.author ||
      !request.body.publishYear
    ) {
      return response.status(400).send({ message: "All fields are required" });
    }
    const updatedBook = await Book.findByIdAndUpdate(
      id,
      // {
      //   title: request.body.title,
      //   author: request.body.author,
      //   publishYear: request.body.publishYear,
      // },
      // { new: true } ,
      request.body
    );
    return response.status(201).send(updatedBook);
  } catch (err) {
    console.log(err);
    response.status(500).send({ message: err.message });
  }
});

//delete a book by ID and update it
router.delete("/:id", async (request, response) => {
  try {
    const { id } = request.params;
    const deletedBook = await Book.findByIdAndDelete(id);
    if (!deletedBook) {
      return response.status(404).send({ message: "Book not found" });
    }

    return response.status(201).send(deletedBook);
  } catch (err) {
    console.log(err);
    response.status(500).send({ message: err.message });
  }
});

export default router;

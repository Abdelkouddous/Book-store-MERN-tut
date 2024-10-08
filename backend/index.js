import express from "express";
import { mongoDBURL, PORT } from "./config.js";
import mongoose from "mongoose";
import booksRoute from "./routes/books-route.js";
import cors from "cors";

const app = express();
//middleware allows using json files on express server
app.use(express.json());

//middleware for handling CORS policy
app.use(cors());
//option 2 : allow custom origins
// app.use(
//   cors({
//     origin: "http://localhost:5000",
//     methods: ["GET", "POST", "PUT", "DELETE"],
//     allowedHeaders: ["Content-Type"],
//   })
// ); comment because our ips are different
app.get("/", (request, response) => {
  console.log(request);
  return response.status(234).send(`WELCOME TO MERN STACK`);
});

app.use("/books", booksRoute);
mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`Server started on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB", err);
    // process.exit(1);
  });

//CORS POLICY == CROSS ORIGIN RESOURCE SHARING

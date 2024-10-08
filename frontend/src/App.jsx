import { Routes, Route } from "react-router-dom";
import CreateBook from "./pages/CreateBook";
import ShowBook from "./pages/ShowBook";
import DeleteBook from "./pages/DeleteBook";
import EditBook from "./pages/EditBook";
import Home from "./pages/home";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/books/create" element={<CreateBook />} />
      <Route path="/books/details/:id" element={<ShowBook />} />
      <Route path="/books/edit/:id" element={<EditBook />} />
      <Route path="/books/delete/:id" element={<DeleteBook />} />
    </Routes>
    // <h1 className="bg-red-100 text-3xl font-bold underline">Hello tailwind!</h1>
  );
}

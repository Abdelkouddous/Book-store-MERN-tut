import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";
// import axios from "axios";
// import { useParams } from "react-router-dom";

export const BooksTable = ({ books }) => {
  //================================================================
  //editting the book infos
  // const { id } = useParams();
  // const handleDeleteBook = () => {
  //   // setLoading(true);
  //   axios
  //     .delete(`http://localhost:5000/books/${id}`)
  //     .then(() => {
  //       // setLoading(false);
  //       // setBook(response.data.data);
  //       alert(`Book ${book} deleted successfully`);
  //       navigate("/");
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //       setLoading(false);
  //     });
  // };
  return (
    // <table className="w-full border-spacing-2 ">
    //   <thead >
    //     <tr>
    //       <th className="px-4 py-2 text-left text-gray-700">No</th>
    //       <th className="px-4 py-2 text-left text-gray-700">Title</th>
    //       <th className="px-4 py-2 text-left text-gray-700 max-md:hidden">
    //         Author
    //       </th>
    //       <th className="px-4 py-2 text-left text-gray-700 max-md:hidden">
    //         Publish Year
    //       </th>
    //       <th className="px-4 py-2 text-left text-gray-700 md:flex md:items-center md:justify-center">
    //         Operations
    //       </th>
    //     </tr>
    //   </thead>
    //   <tbody>
    //     {/* loop through the books array and create a table row for each book */}
    //     {books.map((book, index) => (
    //       // NOTE:  DO NOT USE {} Instead of () in map method because it will not render the book information
    //       <tr key={book._id} className="h-8">
    //         {" "}
    //         {console.log(book._id, book.title, index + 1)}
    //         <td className="border border-slate-700 rounded-md text-center">
    //           {index + 1}
    //         </td>
    //         <td className="border border-slate-700 rounded-md text-center">
    //           {/* {book.title} */}

    //           {book.title}
    //         </td>
    //         <td className="border border-slate-700 rounded-md text-center max-md:hidden">
    //           {book.author}
    //         </td>
    //         <td className="border border-slate-700 rounded-md text-center max-md:hidden">
    //           {book.publishYear}
    //         </td>
    //         <td className="border border-slate-700 rounded-md text-center">
    //           <div className="flex justify-center gap-x-4">
    //             <Link to={`/books/details/${book._id}`}>
    //               <BsInfoCircle className="text-sky-950 text-2xl cursor-pointer"></BsInfoCircle>
    //             </Link>
    //             <Link to={`/books/edit/${book._id}`}>
    //               <AiOutlineEdit className="text-sky-950 text-2xl cursor-pointer"></AiOutlineEdit>
    //             </Link>
    //             <Link to={`/books/delete/${book._id}`}>
    //               <MdOutlineDelete className="text-sky-950 text-2xl cursor-pointer"></MdOutlineDelete>
    //             </Link>
    //           </div>
    //         </td>
    //       </tr>
    //     ))}
    //   </tbody>
    // </table>
    <table className="w-full border-separate border-spacing-1">
      <thead>
        <tr>
          <th className="px-4 py-2 text-left text-gray-700">No</th>
          <th className="px-4 py-2 text-left text-gray-700">Title</th>
          <th className="px-4 py-2 text-left text-gray-700 max-md:hidden">
            Author
          </th>
          <th className="px-4 py-2 text-left text-gray-700 max-md:hidden">
            Publish Year
          </th>
          <th className="px-4 py-2 text-left text-gray-700 md:flex md:items-center md:justify-center">
            Operations
          </th>
        </tr>
      </thead>
      <tbody>
        {/* loop through the books array and create a table row for each book */}
        {books.map((book, index) => (
          <tr key={book._id} className="h-8 ">
            {console.log(book._id, book.title, index + 1)}
            <td className="border border-slate-700 rounded-md text-center hover:bg-sky-200">
              {index + 1}
            </td>
            <td className="border border-slate-700 rounded-md text-center hover:bg-sky-200">
              {book.title}
            </td>
            <td className="border border-slate-700 rounded-md text-center hover:bg-sky-200 max-md:hidden">
              {book.author}
            </td>
            <td className="border border-slate-700 rounded-md text-center hover:bg-sky-200 max-md:hidden">
              {book.publishYear}
            </td>
            <td className="border border-slate-700 rounded-md text-center hover:bg-sky-200">
              <div className="flex justify-center gap-x-4">
                <Link to={`/books/details/${book._id}`}>
                  <BsInfoCircle className="text-sky-950 text-2xl hover:scale-105 cursor-pointer hover:bg-sky-200" />
                </Link>
                <Link to={`/books/edit/${book._id}`}>
                  <AiOutlineEdit className="text-sky-950 text-2xl hover:scale-105 cursor-pointer hover:bg-sky-200" />
                </Link>
                <Link to={`/books/delete/${book._id}`}>
                  <MdOutlineDelete className="text-sky-950 text-2xl hover:scale-105 cursor-pointer hover:bg-sky-200 " />
                </Link>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

// export default BooksTable;

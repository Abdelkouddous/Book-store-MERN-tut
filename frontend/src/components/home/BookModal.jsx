// import React from "react";
// import { Link } from "react-router-dom";
// import { AiOutlineClose, AiOutlineEdit } from "react-icons/ai";
// import { BsInfoCircle } from "react-icons/bs";
// import { MdOutlineDelete } from "react-icons/md";

// import { PiBookOpenTextLight } from "react-icons/pi";
// import { BiUserCircle } from "react-icons/bi";

// const BookModal = (book, onClose) => {
//   return (
//     <div
//       className="flex bg-black bg-opacity-60 top-0 left-0 right-0 bottom-0 z-50  justify-center items-center"
//       onClick={() => onClose}
//     >
//       {/* BookModal */}
//       <div
//         onClick={(event) => event.stopPropagation()}
//         className="w-[600px] max-w-full h-[400px] bg-white rounded-xl p-4 flex flex-col relative"
//       >
//         <AiOutlineClose
//           onClick={() => onClose}
//           className="absolute right-6 top-6 text-3xl text-red-600 cursor-pointer"
//         ></AiOutlineClose>
//         <h2 className="w-fit  px-4 py-1 bg-red-300 rounded-lg">
//           {book.publishYear}
//         </h2>
//         <h4 className="my-2 text-gray-500">{book.id}</h4>
//         <div className="flex justify-start items-center gap-x-2">
//           <PiBookOpenTextLight className="text-red-300 text-2xl"></PiBookOpenTextLight>
//           <h2 className="my-1">{book.title}</h2>
//         </div>
//         <div className="flex justify-start items-center gap-x-2">
//           <BiUserCircle className="text-red-300 text-2xl" />
//           <h2 className="my-1">{book.author}</h2>
//         </div>
//         <p>lorem ipsum</p>
//         <p>
//           {" "}
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at
//           quam in nulla tincidunt scelerisque. Curabitur dignissim, quam non
//           commodo finibus, massa orci convallis odio, vitae scelerisque urna
//           risus eu nisl. Donec hendrerit libero id risus finibus, non placerat
//           felis ultricies. Integer tincidunt ex id erat pellentesque, quis
//           tincidunt lacus fermentum. Phasellus tincidunt malesuada sem, eu
//           fermentum felis varius eget. Sed vitae facilisis urna. Vestibulum ante
//           ipsum primis in faucibus orci luctus et ultrices posuere cubilia
//           curae;
//         </p>
//       </div>
//     </div>
//   );
// };

// export default BookModal;
import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { PiBookOpenTextLight } from "react-icons/pi";
import { BiUserCircle } from "react-icons/bi";

const BookModal = ({ book, onClose }) => {
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-70 z-50 flex justify-center items-center"
      onClick={onClose} // Calls onClose when clicking outside the modal
    >
      <div
        onClick={(event) => event.stopPropagation()} // Prevents closing when clicking inside the modal
        className=" w-[600px] max-w-full h-[400px] bg-white rounded-xl p-4 flex flex-col relative"
      >
        <AiOutlineClose
          onClick={onClose} // Close modal when clicking the 'X'
          className="absolute right-6 top-6 text-3xl text-sky-600 cursor-pointer"
        />
        <h2 className="w-fit px-4 py-1 bg-sky-300 rounded-lg ">
          {book.publishYear}
        </h2>
        <h4 className="my-2 text-gray-500">{book.id}</h4>
        <div className="flex justify-start items-center gap-x-2">
          <PiBookOpenTextLight className="text-sky-300 text-2xl" />
          <h2 className="my-1">{book.title}</h2>
        </div>
        <div className="flex justify-start items-center gap-x-2">
          <BiUserCircle className="text-sky-300 text-2xl" />
          <h2 className="my-1">{book.author}</h2>
        </div>
        <p>lorem ipsum</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at
          quam in nulla tincidunt scelerisque. Curabitur dignissim, quam non
          commodo finibus, massa orci convallis odio, vitae scelerisque urna
          risus eu nisl.
        </p>
      </div>
    </div>
  );
};

export default BookModal;

import React from "react";

import BookSingleCard from "./BookSingleCard";

// TODO: create a table component for displaying book list
// TODO: create a card component for displaying book information

export const BooksCard = ({ books }) => {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {books.map((bookItem) => (
        <BookSingleCard key={bookItem._id} book={bookItem}></BookSingleCard>
      ))}
    </div>
  );
};

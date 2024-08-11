import { useContext, useState } from "react";
import BookContext from "./context/bookContext";

function App() {
  const { book, setBook } = useContext(BookContext);
  const handleName = (e) => {
    setBook({ ...book, name: e.target.value });
  };
  const handleAuthor = (e) => {
    setBook({ ...book, author: e.target.value });
  };
  const handleYear = (e) => {
    setBook({ ...book, year: e.target.value });
  };
  const handlePages = (e) => {
    setBook({ ...book, pages: e.target.value });
  };
  return (
    <>
      <div>
        <h1>Book Data</h1>
        <p>Name: {book.name}</p>
        <p>Author: {book.author}</p>
        <p>Year: {book.year}</p>
        <p>Pages: {book.pages}</p>
      </div>
      <div>
        <h1>User Form</h1>
        <input type="text" placeholder="Name" onChange={handleName} />
        <input type="text" placeholder="Author" onChange={handleAuthor} />
        <input type="email" placeholder="Year" onChange={handleYear} />
        <input type="text" placeholder="Pages" onChange={handlePages} />
      </div>
    </>
  );
}

export default App;

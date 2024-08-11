import { createContext, useState } from "react";

const BookContext = createContext();

function BookProvider({ children }) {
  const books = [
    {
      name: "Cien años de soledad",
      author: "Gabriel Garcia Marquez",
      year: 1960,
    },
    { name: "Harry Potter", author: "J.K. Rowling", year: 1997 },
    { name: "El senor de los anillos", author: "J.R.R. Tolkien", year: 1954 },
    { name: "El principito", author: "Antoine de Saint-Exupéry", year: 1943 },
    { name: "El Hobbit", author: "J.R.R. Tolkien", year: 1937 },
    { name: "1984", author: "George Orwell", year: 1949 },
    { name: "El resplandor", author: "Stephen King", year: 1978 },
    {
      name: "La isla del tesoro",
      author: "Robert Louis Stevenson",
      year: 1954,
    },
    { name: "La biblia de los caídos", author: "Fernado Trujillo", year: 2008 },
  ];
  const valuesToShare = {
    books,
  };
  return (
    <BookContext.Provider value={valuesToShare}>
      {children}
    </BookContext.Provider>
  );
}

export { BookProvider };
export default BookContext;

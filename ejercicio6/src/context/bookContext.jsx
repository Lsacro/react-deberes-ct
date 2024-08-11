import { createContext, useState } from "react";

const BookContext = createContext();

function BookProvider({ children }) {
  const books = [
    { name: "Cien años de soledad", author: "Gabriel Garcia Marquez" },
    { name: "Harry Potter", author: "J.K. Rowling" },
    { name: "El senor de los anillos", author: "J.R.R. Tolkien" },
    { name: "El principito", author: "Antoine de Saint-Exupéry" },
    { name: "El Hobbit", author: "J.R.R. Tolkien" },
    { name: "1984", author: "George Orwell" },
    { name: "El resplandor", author: "Stephen King" },
    { name: "La isla del tesoro", author: "Robert Louis Stevenson" },
    { name: "La biblia de los caídos", author: "Fernado Trujillo" },
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

import { createContext, useState } from "react";

const BookContext = createContext();

function BookProvider({ children }) {
  const [book, setBook] = useState({
    name: "Urantia",
    author: "J. K. Rowling",
    year: "1999",
    pages: 1000,
  });

  const valuesToShare = {
    book,
    setBook,
  };

  return (
    <BookContext.Provider value={valuesToShare}>
      {children}
    </BookContext.Provider>
  );
}

export { BookProvider };
export default BookContext;

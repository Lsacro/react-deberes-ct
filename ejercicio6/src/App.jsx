import { useContext } from "react";
import BookContext from "./context/bookContext";

function App() {
  const { books } = useContext(BookContext);
  return (
    <div>
      <h1>Book List</h1>
      <ul>
        {books.map((book, index) => (
          <li key={index}>
            {book.name} - {book.author}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

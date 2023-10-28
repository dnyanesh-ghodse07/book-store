import "./Authors.css";
import { useContext } from "react";
import { BooksContext } from "../../store/bookContext";
import Author from "../../components/Author/Author";

const Authors = () => {
  const { books } = useContext(BooksContext);
  return (
    <>
      <h1>Authors</h1>
      {books.map((book) => (
        <Author key={book.id} book={book} />
      ))}
    </>
  );
};

export default Authors;

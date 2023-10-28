import "./Books.css";
import { useContext } from "react";
import { BooksContext } from "../../store/bookContext";
import BookCard from "../../components/BookCard/BookCard";

const Books = () => {
  const { loading, error, books } = useContext(BooksContext);
  return (
    <div>
      {loading && <>Loading...</>}
      {error && <>Error</>}
      <div className="books">
        {books?.map((book) => {
          return <BookCard key={book.id} book={book} />;
        })}
      </div>
    </div>
  );
};

export default Books;

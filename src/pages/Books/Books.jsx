import { useContext } from "react";
import { BooksContext } from "../../store/bookContext";
import BookCard from "../../components/BookCard/BookCard";
import styles from "./Books.module.css";

const Books = () => {
  const { loading, error, books } = useContext(BooksContext);
  return (
    <div className={styles.allBooksContainer}>
      {loading && <>Loading...</>}
      {error && <>Error</>}
      <div className={styles.books}>
        {books?.map((book) => {
          return <BookCard key={book.id} book={book} />;
        })}
      </div>
    </div>
  );
};

export default Books;

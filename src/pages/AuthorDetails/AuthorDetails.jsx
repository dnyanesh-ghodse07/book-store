import { useParams } from "react-router-dom";
import styles from "./AuthorDetails.module.css";
import { useContext } from "react";
import { BooksContext } from "../../store/bookContext";
import BookCard from "../../components/BookCard/BookCard";

const AuthorDetails = () => {
  const { id } = useParams();
  const { getBookByAuthors, getBookById } = useContext(BooksContext);
  const book = getBookById(id)[0];
  const books = getBookByAuthors(book.author);
  return (
    <div className={styles.authorDetails}>
      <div className={styles.author}>
        <div className={styles.img}>
          <img src={books[0].authorImg} alt="" />
        </div>
        <div className={styles.detail}>
          <h1>{books[0].author}</h1>
          <p>{books[0].authorDesc}</p>
        </div>
        <hr />
        <h1>Books : </h1>
        <div className={styles.books}>
          {books.map((item) => (
            <BookCard key={item.id} book={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AuthorDetails;

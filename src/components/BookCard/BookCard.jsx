/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import styles from "./BookCard.module.css";

const BookCard = ({ book }) => {
  return (
    <Link to={`/books/${book.id}`}>
      <div className={styles.book}>
        <div className={styles.bookCover}>
          <img src={book.cover} alt="" />
        </div>
        <div className={styles.bookDetails}>
          <h2 className={styles.bookTitle}>{book.title?.substring(0, 15)}</h2>
          <p className={styles.bookAuthor}>{book.author}</p>
          <p className={styles.desc}>
            {book.bookDesc?.length > 100
              ? book.bookDesc?.substring(0, 100) + "..."
              : book.bookDesc}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default BookCard;

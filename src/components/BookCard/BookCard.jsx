/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import styles from "./BookCard.module.css";

const BookCard = ({ book }) => {
  return (
    <Link to={`/books/${book.id}`}>
      <div className="bg-slate-50 overflow-hidden relative text-slate-500 rounded-md ">
        <div className="h-full w-full">
          <img className="h-full w-full object-cover" src={book.cover} alt="" />
        </div>
        <div className="p-4 absolute -bottom-20 hover:bottom-0 bg-slate-50 hover:transition-all transition ease-in-out delay-150">
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

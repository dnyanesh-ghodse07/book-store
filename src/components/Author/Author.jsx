/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import styles from "./Author.module.css";

const Author = ({ book }) => {
  return (
    <Link to={`/authors/${book.id}`}>
      <div className={styles.author}>
        <img src={book?.authorImg} alt="" />
        <div>
          <h2>{book?.author}</h2>
          <p>{book?.authorDesc}</p>
        </div>
      </div>
    </Link>
  );
};

export default Author;

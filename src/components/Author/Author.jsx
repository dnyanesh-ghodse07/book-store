/* eslint-disable react/prop-types */
import styles from "./Author.module.css";

const Author = ({ book }) => {
  return (
    <div className={styles.author}>
      <img src={book.authorImg} alt="" />
      <div>
        <h2>{book.author}</h2>
        <p>{book.authorDesc}</p>
      </div>
    </div>
  );
};

export default Author;

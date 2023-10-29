import { useContext } from "react";
import { useParams } from "react-router-dom";
import { BooksContext } from "../../store/bookContext";
import styles from "./BookDetails.module.css";
import { useCart } from "../../store/CartContext";

const BookDetails = () => {
  const { id } = useParams();
  const { handleAddToCart } = useCart();
  const { getBookById } = useContext(BooksContext);

  const book = getBookById(id)[0];

  return (
    <div className={styles.bookDetailContainer}>
      <div className={styles.bookDetails}>
        <div className={styles.left}>
          <img src={book?.cover} alt="" />
        </div>
        <div className={styles.right}>
          <div className={styles.details}>
            <h2 className={styles.bookTitle}>{book?.title}</h2>
            <h3 className={styles.bookAuthor}>{book?.author}</h3>
            <p className={styles.bookDesc}>{book?.bookDesc}</p>
          </div>
          <button onClick={() => handleAddToCart(book)}>Add to cart</button>
        </div>
        {/* <p>{}</p> */}
      </div>
    </div>
  );
};

export default BookDetails;

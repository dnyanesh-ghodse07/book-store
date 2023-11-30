import { useContext } from "react";
import { useParams } from "react-router-dom";
import { BooksContext } from "../../store/bookContext";
import { useCart } from "../../store/CartContext";

const BookDetails = () => {
  const { id } = useParams();
  const { handleAddToCart } = useCart();
  const { getBookById } = useContext(BooksContext);

  const book = getBookById(id)[0];

  return (
    <div className="">
      <div className="">
        <div className="">
          <img src={book?.cover} alt="" />
        </div>
        <div className="">
          <div className="">
            <h2 className="">{book?.title}</h2>
            <h3 className="">{book?.author}</h3>
            <p className="">{book?.bookDesc}</p>
          </div>
          <button onClick={() => handleAddToCart(book)}>Add to cart</button>
        </div>
        {/* <p>{}</p> */}
      </div>
    </div>
  );
};

export default BookDetails;

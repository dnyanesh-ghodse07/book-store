/* eslint-disable react/prop-types */
import "./BookCard.css";

const BookCard = ({ book }) => {
  return (
    <div className="book">
      <div className="book-cover">
        <img src={book.cover} alt="" />
      </div>
      <div className="book-details">
        <h2 className="book-title">{book.title?.substring(0, 15)}</h2>
        <p className="book-author">{book.author}</p>
      </div>
    </div>
  );
};

export default BookCard;

/* eslint-disable react/prop-types */
import "./Author.css";

const Author = ({ book }) => {
  return (
    <div className="author">
      <img src={book.authorImg} alt="" />
      <div>
        <h2>{book.author}</h2>
        <p>{book.authorDesc}</p>
      </div>
    </div>
  );
};

export default Author;

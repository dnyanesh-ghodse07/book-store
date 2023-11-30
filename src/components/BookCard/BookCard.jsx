/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const BookCard = ({ book }) => {
  return (
    <div className="bg-slate-100 flex-grow p-2">
      <Link to={`/books/${book.id}`}>
        <div className="w-full">
          <div className="">
            <img className="w-full h-56 object-cover" src={book.cover} alt="" />
          </div>
          <div className="p-2">
            <h2 className="text-slate-800">{book.title?.substring(0, 15)}</h2>
            <p className="text-slate-400">{book.author}</p>
            {/* <p className="">
              {book.bookDesc?.length > 100
                ? book.bookDesc?.substring(0, 100) + "..."
                : book.bookDesc}
            </p> */}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default BookCard;

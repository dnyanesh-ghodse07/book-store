/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const Author = ({ book }) => {
  return (
    <div className="p-2">
      <Link to={`/authors/${book.id}`}>
        <div className="">
          <div className="">
            <img
              className="w-[200px] h-[200px] object-cover"
              src={book?.authorImg}
              alt=""
            />
          </div>
          <div className="p-2">
            <h2>{book?.author}</h2>
            <p className="">{book?.authorDesc}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Author;

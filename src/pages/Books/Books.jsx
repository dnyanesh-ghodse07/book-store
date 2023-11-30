import { useContext } from "react";
import { BooksContext } from "../../store/bookContext";
import BookCard from "../../components/BookCard/BookCard";

const Books = () => {
  const { loading, error, books } = useContext(BooksContext);
  return (
    <div className="">
      {loading && <>Loading...</>}
      {error && <>Error</>}
      <div className="p-4 mr-auto w-full flex gap-4 flex-wrap">
        {books?.map((book) => {
          return <BookCard key={book.id} book={book} />;
        })}
      </div>
    </div>
  );
};

export default Books;

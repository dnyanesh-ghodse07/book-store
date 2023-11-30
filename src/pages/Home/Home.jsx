import BookCard from "../../components/BookCard/BookCard";

import { BooksContext } from "../../store/bookContext";
import { useContext } from "react";
const Home = () => {
  const { loading, error, featuredBooks } = useContext(BooksContext);

  return (
    <div className="w-full">
      <div className="p-10  md:p-20 flex justify-center text-slate-100 bg-gray-700">
        <h1 className="md:text-3xl">Welcome To BookStore 📚</h1>
      </div>
      <div className="p-4 mr-auto w-full flex gap-4 flex-wrap ">
        {loading && <>Loading...</>}
        {error && <>Error</>}
        {featuredBooks?.map((book) => {
          return <BookCard key={book.id} book={book} />;
        })}
      </div>
    </div>
  );
};

export default Home;

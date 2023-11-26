import styles from "./Home.module.css";
import BookCard from "../../components/BookCard/BookCard";

import { BooksContext } from "../../store/bookContext";
import { useContext } from "react";
const Home = () => {
  const { loading, error, featuredBooks } = useContext(BooksContext);

  return (
    <div>
      <div className="h-52 flex justify-center items-center bg-slate-400 my-4">
        <h1 className="text-2xl md:text-5xl text-cyan-100">
          Welcome To BookStore 📚
        </h1>
      </div>
      {loading && <>Loading...</>}
      {error && <>Error</>}
      <div className={styles.books}>
        {featuredBooks?.map((book) => {
          return <BookCard key={book.id} book={book} />;
        })}
      </div>
    </div>
  );
};

export default Home;

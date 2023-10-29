import styles from "./Home.module.css";
import BookCard from "../../components/BookCard/BookCard";

import { BooksContext } from "../../store/bookContext";
import { useContext } from "react";
const Home = () => {
  const { loading, error, featuredBooks } = useContext(BooksContext);

  return (
    <div>
      <div className={styles.welcome}>
        <h1>Welcome To BookStore 📚</h1>
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

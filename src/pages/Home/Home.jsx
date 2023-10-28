import { useEffect, useState } from "react";
import "./Home.css";
import fakeApi from "../../data/fakeApi";
import BookCard from "../../components/BookCard/BookCard";
const Home = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [books, setBooks] = useState([]);

  async function getBooks() {
    try {
      setLoading(true);
      const data = await fakeApi;
      setBooks(data);
      setLoading(false);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getBooks();
  }, []);
  return (
    <div>
      {loading && <>Loading...</>}
      {error && <>Error</>}
      <div className="books">
        {books.map((book) => {
          return <BookCard key={book.id} book={book} />;
        })}
      </div>
    </div>
  );
};

export default Home;

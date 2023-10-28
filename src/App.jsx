import { useEffect, useState } from "react";
import "./App.css";
import fakeApi from "./data/fakeApi";
import BookCard from "./components/BookCard/BookCard";

function App() {
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
    <>
      <h1>Book store</h1>
      {loading && <>Loading...</>}
      {error && <>Error</>}
      <div className="books">
        {books.map((book) => {
          return <BookCard key={book.id} book={book} />;
        })}
      </div>
    </>
  );
}

export default App;

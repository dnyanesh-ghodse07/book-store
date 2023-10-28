import { useEffect, useState } from "react";
import "./App.css";
import fakeApi from "./data/fakeApi";

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
      {books.map((book) => {
        return <p key={book.id}>{book.title}</p>;
      })}
    </>
  );
}

export default App;

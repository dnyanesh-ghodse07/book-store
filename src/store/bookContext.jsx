/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import fakeApi from "../data/fakeApi";

export const BooksContext = createContext();

const BooksContextProvider = ({ children }) => {
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

  const featuredBooks = books.filter((book) => book.featured === true);

  function getBookByAuthors(author) {
    const filteredBooks = books.filter((book) => book.author === author);
    return filteredBooks;
  }

  function getBookById(id) {
    const filteredById = books.filter((book) => book.id === id);
    return filteredById;
  }

  return (
    <BooksContext.Provider
      value={{
        loading,
        error,
        books,
        featuredBooks,
        getBookByAuthors,
        getBookById,
      }}
    >
      {children}
    </BooksContext.Provider>
  );
};

export default BooksContextProvider;

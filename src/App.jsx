import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home/Home";
import Authors from "./pages/Authors/Authors";
import BookDetails from "./pages/BookDetails/BookDetails";
import Books from "./pages/Books/Books";
import Navbar from "./components/NavBar/Navbar";
import Cart from "./pages/Cart/Cart";
import AuthorDetails from "./pages/AuthorDetails/AuthorDetails";
import Login from "./pages/Login/Login";
import { useContext } from "react";
import { BooksContext } from "./store/bookContext";

function App() {
  const { login } = useContext(BooksContext);
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="authors" element={<Authors />}></Route>
        <Route path="/authors/:id" element={<AuthorDetails />} />
        <Route
          path="cart"
          element={login ? <Cart /> : <Navigate to="/login" />}
        />
        <Route path="books" element={<Books />}></Route>
        <Route path="books/:id" element={<BookDetails />} />
        <Route path="login" element={<Login />}></Route>
      </Routes>
    </div>
  );
}

export default App;

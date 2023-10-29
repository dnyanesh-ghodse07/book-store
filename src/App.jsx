import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Authors from "./pages/Authors/Authors";
import BookDetails from "./pages/BookDetails/BookDetails";
import Books from "./pages/Books/Books";
import Navbar from "./components/NavBar/Navbar";
import Cart from "./pages/Cart/Cart";
import AuthorDetails from "./pages/AuthorDetails/AuthorDetails";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="authors" element={<Authors />}></Route>
        <Route path="/authors/:id" element={<AuthorDetails />} />
        <Route path="cart" element={<Cart />} />
        <Route path="books" element={<Books />}></Route>
        <Route path="books/:id" element={<BookDetails />} />
      </Routes>
    </div>
  );
}

export default App;

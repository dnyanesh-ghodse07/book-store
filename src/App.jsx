import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Authors from "./pages/Authors/Authors";
import BookDetails from "./pages/BookDetails/BookDetails";
import Books from "./pages/Books/Books";
import Navbar from "./components/NavBar/Navbar";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path=":id" element={<BookDetails />}></Route>
        <Route path="authors" element={<Authors />}></Route>
        <Route path="books" element={<Books />}></Route>
      </Routes>
    </div>
  );
}

export default App;

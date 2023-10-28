import { NavLink } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="navbar">
      <h1 className="logo">Book Store</h1>
      <ul className="nav-links">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="books">Books</NavLink>
        </li>
        <li>
          <NavLink to="authors">Authors</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;

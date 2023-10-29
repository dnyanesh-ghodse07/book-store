import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <h1 className={styles.logo}>Book Store</h1>
      <ul className={styles.navLinks}>
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

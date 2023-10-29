import { NavLink, useNavigate } from "react-router-dom";
import styles from "./Navbar.module.css";
import { useCart } from "../../store/CartContext";
import { useContext } from "react";
import { BooksContext } from "../../store/bookContext";
const Navbar = () => {
  const { cartState } = useCart();
  const navigate = useNavigate();
  const { login, setLogin } = useContext(BooksContext);

  const handleLogout = () => {
    setLogin(false);
    navigate("/");
  };

  return (
    <div className={styles.navbar}>
      <h1 className={styles.logo}>Book Store 📖</h1>
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
        <li>
          <NavLink to="cart">
            Cart{" "}
            {cartState.cart.length > 0 ? (
              <span style={{ background: "lightgreen", padding: "4px" }}>
                {cartState.cart.length}
              </span>
            ) : (
              ""
            )}
          </NavLink>
        </li>
        {!login ? (
          <li>
            <NavLink to="login">Login</NavLink>
          </li>
        ) : (
          <button className={styles.logout} onClick={handleLogout}>
            Logout
          </button>
        )}
      </ul>
    </div>
  );
};

export default Navbar;

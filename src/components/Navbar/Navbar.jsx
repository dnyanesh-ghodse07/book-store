import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
import { useCart } from "../../store/CartContext";
const Navbar = () => {
  const { cartState } = useCart();

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
      </ul>
    </div>
  );
};

export default Navbar;

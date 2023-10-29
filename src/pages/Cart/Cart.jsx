import styles from "./Cart.module.css";
import { useCart } from "../../store/CartContext";

const Cart = () => {
  const { cart } = useCart();
  console.log(cart);
  return (
    <div className={styles.cart}>
      <h1>Your Cart</h1>
      <div className={styles.cartItems}>Cart Items</div>
      <div className={styles.summary}>Summary</div>
    </div>
  );
};

export default Cart;

import styles from "./Cart.module.css";
import { useCart } from "../../store/CartContext";
import CartItem from "../../components/CartItem/CartItem";

const Cart = () => {
  const { cartState } = useCart();
  const total = cartState.cart.reduce((acc, curr) => {
    return acc + curr.price * curr.quantity;
  }, 0);

  if (cartState.cart.length === 0) {
    return <h1 style={{ textAlign: "center" }}>Your cart is empty!</h1>;
  }
  return (
    <div className={styles.cart}>
      <h1>Your Cart</h1>
      <div className={styles.cartContainer}>
        <div className={styles.cartList}>
          <h3>Cart Items</h3>
          <div className={styles.cartItems}>
            {cartState.cart?.map((item) => {
              return <CartItem key={item.id} item={item} />;
            })}
          </div>
        </div>
        <div className={styles.summary}>
          <h3>Cart Summary</h3>
          <hr />
          {cartState.cart?.map((item) => {
            return (
              <div key={item.id} className={styles.summaryItem}>
                <span style={{ color: "#999" }}>{item.title}</span>{" "}
                <span>$ {item.price * item.quantity}</span>
              </div>
            );
          })}
          <hr />
          <h3>Total : ${total}</h3>
        </div>
      </div>
    </div>
  );
};

export default Cart;

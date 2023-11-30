/* eslint-disable react/prop-types */
import { useCart } from "../../store/CartContext";

const CartItem = ({ item }) => {
  const { handleAddToCart, handleRemoveFromCart } = useCart();
  return (
    <div className="" key={item.id}>
      <img src={item.cover} alt="" />
      <div className="">
        <h5>{item.title}</h5>
        <h6>{item.bookDesc?.substring(0, 100)}</h6>
        <div className="">
          <button onClick={() => handleAddToCart(item)}>+</button>
          {item.quantity}
          <button onClick={() => handleRemoveFromCart(item)}>-</button>
        </div>
        <p>Price : {item.price}/item</p>
      </div>
    </div>
  );
};

export default CartItem;

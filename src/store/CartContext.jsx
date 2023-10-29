/* eslint-disable react/prop-types */
import { createContext, useReducer, useContext } from "react";

const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case "UPDATE_QUANTITY":
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: action.payload.quantity }
            : item
        ),
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    case "CLEAR_CART":
      return {
        ...state,
        cart: [],
      };

    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [cartState, cartDispatch] = useReducer(cartReducer, {
    cart: [],
  });

  const handleAddToCart = (book) => {
    const existingItem = cartState.cart.find(
      (cartItem) => cartItem.id === book.id
    );
    if (existingItem) {
      cartDispatch({
        type: "UPDATE_QUANTITY",
        payload: { id: book.id, quantity: existingItem.quantity + 1 },
      });
    } else {
      cartDispatch({ type: "ADD_TO_CART", payload: { ...book, quantity: 1 } });
    }
  };

  const handleRemoveFromCart = (book) => {
    const existingItem = cartState.cart.find(
      (cartItem) => cartItem.id === book.id
    );
    if (existingItem) {
      cartDispatch({
        type: "UPDATE_QUANTITY",
        payload: { id: book.id, quantity: existingItem.quantity - 1 },
      });
    }

    if (existingItem.quantity === 1) {
      cartDispatch({
        type: "REMOVE_FROM_CART",
        payload: { id: book.id },
      });
    }
  };

  return (
    <CartContext.Provider
      value={{ cartState, cartDispatch, handleAddToCart, handleRemoveFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

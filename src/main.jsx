import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import BooksContextProvider from "./store/bookContext.jsx";
import { CartProvider } from "./store/CartContext.jsx";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CartProvider>
      <BooksContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </BooksContextProvider>
    </CartProvider>
  </React.StrictMode>
);

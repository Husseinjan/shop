import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createStore } from "redux";
import { Provider } from "react-redux";
const defaultStore = {
  cart: [],
};
const reducer = (state = defaultStore, action) => {
  switch (action.type) {
    case "ADD_CART":
      return { ...state, cart: [...state.cart, action.payload] };
    case "REMOVE_CART":
      return {
        ...state,
        cart: (state.cart = state.cart.filter(
          (el) => el.id !== action.payload
        )),
      };
    default:
      return state;
  }
};
const store = createStore(reducer);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();

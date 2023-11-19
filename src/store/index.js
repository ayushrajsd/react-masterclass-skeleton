import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart";

const reducer = {
  cart: cartReducer,
};

const store = configureStore({
  reducer,
  middleware: [],
});

export default store;

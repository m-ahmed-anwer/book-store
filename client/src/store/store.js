"use client";
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice.js";
import userReducer from "./userSlice.js";
import postReducer from "./postSlice.js";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    user: userReducer,
    posts: postReducer,
  },
});

export default store;
